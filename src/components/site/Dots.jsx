import { useEffect, useRef } from "react";

const cssVar = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

// Trstenko's screen as a dot matrix. The eyes follow the pointer and blink.
export function Face() {
  const ref = useRef(null);

  useEffect(() => {
    const cv = ref.current;
    const g = cv.getContext("2d");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const N = 41;
    const c = (N - 1) / 2;
    let size = 0;
    let cell = 0;
    let raf = 0;
    const look = { x: 0, y: 0 };
    let want = { x: 0, y: 0 };
    let blink = 0;
    let nextBlink = performance.now() + 2500;

    function fit() {
      const r = cv.getBoundingClientRect();
      const d = devicePixelRatio || 1;
      cv.width = cv.height = r.width * d;
      size = cv.width;
      cell = size / N;
    }

    function draw(t) {
      look.x += (want.x - look.x) * 0.12;
      look.y += (want.y - look.y) * 0.12;
      if (!reduce && t > nextBlink) {
        blink = 1;
        nextBlink = t + 2800 + Math.random() * 3500;
      }
      const lid = blink > 0 ? Math.sin(Math.min(blink, 1) * Math.PI) : 0;
      if (blink > 0) blink -= 0.09;

      g.clearRect(0, 0, size, size);
      const dot = cssVar("--dot");
      const lit = cssVar("--lit");
      const eh = Math.max(1, Math.round(7 * (1 - lid)));
      const eyes = [
        [c - 9 + look.x * 3.2, c - 1 + look.y * 2.6],
        [c + 9 + look.x * 3.2, c - 1 + look.y * 2.6],
      ];
      for (let y = 0; y < N; y++) {
        for (let x = 0; x < N; x++) {
          const rr = Math.hypot((x - c) / c, (y - c) / c);
          if (rr > 1.02) continue;
          const on = eyes.some(([ex, ey]) => Math.abs(x - ex) < 3.5 && Math.abs(y - ey) < eh / 2);
          const px = (x + 0.5) * cell;
          const py = (y + 0.5) * cell;
          if (on) {
            g.globalAlpha = 1;
            g.fillStyle = lit;
            g.fillRect(px - cell * 0.36, py - cell * 0.36, cell * 0.72, cell * 0.72);
          } else {
            g.globalAlpha = Math.max(0, 1 - rr * rr * 0.85);
            g.fillStyle = dot;
            g.fillRect(px - cell * 0.18, py - cell * 0.18, cell * 0.36, cell * 0.36);
          }
        }
      }
      g.globalAlpha = 1;
      if (!reduce) raf = requestAnimationFrame(draw);
    }

    function onMove(e) {
      const r = cv.getBoundingClientRect();
      const x = ((e.clientX - (r.left + r.width / 2)) / innerWidth) * 2;
      const y = ((e.clientY - (r.top + r.height / 2)) / innerHeight) * 2;
      want = { x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) };
      if (reduce) draw(0);
    }
    function onResize() {
      fit();
      if (reduce) draw(0);
    }

    fit();
    draw(0);
    addEventListener("pointermove", onMove);
    addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("pointermove", onMove);
      removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} role="img" aria-label="Trstenko's face drawn in pixels; the eyes follow your cursor" />;
}

// A short word spelled in the same dots, used as a project cover.
export function DotWord({ word }) {
  const ref = useRef(null);

  useEffect(() => {
    const cv = ref.current;
    function draw() {
      const r = cv.getBoundingClientRect();
      if (!r.width) return;
      const d = devicePixelRatio || 1;
      const W = (cv.width = r.width * d);
      const H = (cv.height = r.height * d);
      const k = cv.getContext("2d");
      const cols = 48;
      const cs = W / cols;
      const rows = Math.floor(H / cs);
      const o = document.createElement("canvas");
      o.width = cols;
      o.height = rows;
      const ok = o.getContext("2d");
      ok.fillStyle = "#fff";
      ok.textAlign = "center";
      ok.textBaseline = "middle";
      ok.font = `800 ${Math.round(rows * 0.62)}px ${getComputedStyle(document.body).fontFamily}`;
      ok.fillText(word, cols / 2, rows / 2 + 1, cols - 6);
      const px = ok.getImageData(0, 0, cols, rows).data;
      const lit = cssVar("--lit");
      const dot = cssVar("--dot");
      k.clearRect(0, 0, W, H);
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const on = px[(y * cols + x) * 4 + 3] > 110;
          const s = on ? cs * 0.7 : cs * 0.3;
          k.fillStyle = on ? lit : dot;
          k.fillRect((x + 0.5) * cs - s / 2, (y + 0.5) * cs - s / 2, s, s);
        }
      }
    }
    document.fonts.ready.then(draw);
    const ro = new ResizeObserver(draw);
    ro.observe(cv);
    return () => ro.disconnect();
  }, [word]);

  return <canvas ref={ref} aria-hidden="true" />;
}
