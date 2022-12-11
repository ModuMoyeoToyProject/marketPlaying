import { useState } from "react";
import Character from "./element/Character";
import Map from "./element/Map";
import StatusMenu from "./StatusMenu";

const StatusComponent = () => {
  const [menu, setMenu] = useState("character");

  return (
    <div className="status_component">
      {menu === "character" ? (
        <Character />
      ) : menu === "map" ? (
        <Map />
      ) : (
        <Character />
      )}
      <StatusMenu menu={menu} setMenu={setMenu} />
    </div>
  );
};

export default StatusComponent;
