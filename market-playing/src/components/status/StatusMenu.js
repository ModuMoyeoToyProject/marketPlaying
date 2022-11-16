const StatusMenu = (props) => {
  const { menu, setMenu } = props;
  return (
    <div className="menu">
      <div
        className={menu === "character" ? "menu_btn selected" : "menu_btn"}
        onClick={() => setMenu("character")}
      >
        캐릭터
      </div>
      <div
        className={menu === "inventory" ? "menu_btn selected" : "menu_btn"}
        onClick={() => setMenu("inventory")}
      >
        인벤토리
      </div>
      <div
        className={menu === "skill" ? "menu_btn selected" : "menu_btn"}
        onClick={() => setMenu("skill")}
      >
        스킬창
      </div>
      <div
        className={menu === "illustration" ? "menu_btn selected" : "menu_btn"}
        onClick={() => setMenu("illustration")}
      >
        도감
      </div>
      <div
        className={menu === "quest" ? "menu_btn selected" : "menu_btn"}
        onClick={() => setMenu("quest")}
      >
        퀘스트
      </div>
      <div
        className={menu === "like" ? "menu_btn selected" : "menu_btn"}
        onClick={() => setMenu("like")}
      >
        인연
      </div>
      <div
        className={menu === "pet" ? "menu_btn selected" : "menu_btn"}
        onClick={() => setMenu("pet")}
      >
        펫
      </div>
      <div
        className={menu === "map" ? "menu_btn selected" : "menu_btn"}
        onClick={() => setMenu("map")}
      >
        지도
      </div>
      <div
        className={menu === "option" ? "menu_btn selected" : "menu_btn"}
        onClick={() => setMenu("option")}
      >
        옵션
      </div>
      <div
        className={menu === "goBack" ? "menu_btn selected" : "menu_btn"}
        onClick={() => setMenu("goBack")}
      >
        나가기
      </div>
    </div>
  );
};

export default StatusMenu;
