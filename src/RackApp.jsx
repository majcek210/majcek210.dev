import "./rack.css";
import { Blank } from "./components/rack/Unit";
import Console from "./components/rack/Console";
import { AboutUnit, CoolvecityUnit, HeadUnit, PatchPanel, SloBlockUnit, TerraUnit, ToolUnits, TrstenkoUnit } from "./components/rack/Units";

export default function App() {
  return (
    <main className="room">
      <div className="rack">
        <div className="top-vent" aria-hidden="true" />
        <div className="rails">
          <HeadUnit />
          <Blank />
          <TrstenkoUnit />
          <TerraUnit />
          <CoolvecityUnit />
          <ToolUnits />
          <SloBlockUnit />
          <Blank />
          <AboutUnit />
          <PatchPanel />
          <Console />
        </div>
      </div>
      <div className="base" />
      <div className="casters" aria-hidden="true"><i /><i /></div>
      <footer>
        <span>© {new Date().getFullYear()} Maj Plenjšek</span>
        <span>Maribor, Slovenia</span>
      </footer>
    </main>
  );
}
