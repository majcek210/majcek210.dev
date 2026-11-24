// One rack unit that slides out on rails when clicked.
// `face` is what's on the front plate, `children` is what's in the tray.
export default function Unit({ id, plate = "steel", height = 1, handles = "tab", open = false, face, trayClass = "", children }) {
  return (
    <details className="unit" id={id} open={open || undefined}>
      <summary>
        <div className={`plate ${plate}`} style={{ "--h": height }}>
          {handles === "pull" && <span className="handle l" />}
          {face}
          {handles === "pull" && <span className="handle r" />}
          {handles === "tab" && <span className="tab" />}
        </div>
      </summary>
      <div className={`tray ${trayClass}`}>{children}</div>
    </details>
  );
}

export const Vent = () => <span className="vent" aria-hidden="true" />;
export const Blank = () => <div className="blank" aria-hidden="true" />;
