import { useEffect, useState } from "react";

// Unauthenticated GitHub API allows 60 requests an hour per visitor,
// so answers are kept in sessionStorage for 10 minutes.
const TTL = 10 * 60 * 1000;

function cached(url) {
  try {
    const hit = JSON.parse(sessionStorage.getItem(url) || "null");
    if (hit && Date.now() - hit.at < TTL) return hit.data;
  } catch {
    // storage blocked: just fetch
  }
  return null;
}

async function getJson(url) {
  const hit = cached(url);
  if (hit) return hit;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`GitHub ${res.status}`);
  const data = await res.json();
  try {
    sessionStorage.setItem(url, JSON.stringify({ at: Date.now(), data }));
  } catch {
    // ignore
  }
  return data;
}

export function useRepo(repo, snapshot) {
  const [info, setInfo] = useState(snapshot);
  useEffect(() => {
    let live = true;
    getJson(`https://api.github.com/repos/majcek210/${repo}`)
      .then((j) => live && setInfo({ pushed: j.pushed_at, lang: j.language, stars: j.stargazers_count }))
      .catch(() => {});
    return () => {
      live = false;
    };
  }, [repo]);
  return info;
}

export function usePublicRepos(snapshot) {
  const [count, setCount] = useState(snapshot);
  useEffect(() => {
    let live = true;
    getJson("https://api.github.com/users/majcek210")
      .then((u) => live && setCount(u.public_repos))
      .catch(() => {});
    return () => {
      live = false;
    };
  }, []);
  return count;
}

// Last push per repo, newest first. Starts from `snapshot` ({ name: iso })
// and switches to live data when GitHub answers.
export function useRecentPushes(snapshot) {
  const [state, setState] = useState({ pushed: snapshot, live: false });
  useEffect(() => {
    let live = true;
    getJson("https://api.github.com/users/majcek210/repos?sort=pushed&per_page=30")
      .then((list) => {
        if (!live) return;
        const pushed = {};
        list.filter((r) => !r.fork).forEach((r) => (pushed[r.name] = r.pushed_at));
        setState({ pushed, live: true });
      })
      .catch(() => {});
    return () => {
      live = false;
    };
  }, []);
  return state;
}
