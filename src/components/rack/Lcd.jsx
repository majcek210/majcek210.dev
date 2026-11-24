// A 16x2 character LCD. Lines are padded or cut to 16 characters.
const fit = (s) => (String(s).toUpperCase() + " ".repeat(16)).slice(0, 16);

const ddmmyy = (iso) => {
  const d = new Date(iso);
  return [d.getUTCDate(), d.getUTCMonth() + 1].map((n) => String(n).padStart(2, "0")).join(".") + "." + String(d.getUTCFullYear()).slice(2);
};

export function Lcd({ top, bottom, title }) {
  return (
    <div className="lcd" title={title}>
      <pre>{fit(top) + "\n" + fit(bottom)}</pre>
    </div>
  );
}

// "TYPESCRIPT    *2": language on the left, stars on the right.
export function RepoLcd({ info }) {
  const lang = (info.lang || "").slice(0, 11);
  const stars = info.stars ? `*${info.stars}` : "";
  const gap = " ".repeat(Math.max(1, 16 - lang.length - stars.length));
  return <Lcd top={`PUSHED ${ddmmyy(info.pushed)}`} bottom={lang + gap + stars} title={`Last push ${ddmmyy(info.pushed)}`} />;
}
