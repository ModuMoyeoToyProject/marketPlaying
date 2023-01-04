import { useState } from "react";
import Character from "./element/Character";
import Map from "./element/Map";
import StatusMenu from "./StatusMenu";
import QuestData from "./QuestData";

const StatusComponent = () => {
  const [menu, setMenu] = useState("character");

  return (
    <div className="status_component">
      {menu === "character" ? (
        <Character />
      ) : menu === "map" ? (
        <Map />
      ) : menu === "quest" ? (
        <QuestData />
      ) : (
        <Character />
      )}

      <StatusMenu menu={menu} setMenu={setMenu} />
    </div>
  );
};

export default StatusComponent;
