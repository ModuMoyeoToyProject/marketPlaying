const Character = (props) => {
  const data = {
    name: "나리링",
    mbti: "통솔자(ENTJ)",
    birthday: "물병자리(2.14)",
    style: "견습 마녀(LV 1)",
    reputation: "평민",
    experience: 0,
    hp: 5,
    mp: 5,
    sta: 10,
    atk: 1,
    def: 1,
    ap: 1,
    luc: 1,
    dex: 1,
  };

  return (
    <div className="character">
      <div className="character_status">
        <div className="main_status">
          <div className="clothes">
            <div>투구</div>
            <div>상의</div>
            <div>하의</div>
            <div>신발</div>
          </div>
          <div className="character_img">
            <img src={require("../../../img/kirby.gif")} />
          </div>
          <div className="accessory">
            <div>목걸이</div>
            <div>반지</div>
            <div>팔찌</div>
            <div>도구</div>
          </div>
          <div className="character_info">
            <div>캐릭터명: {data.name}</div>
            <div>MBTI: {data.mbti}</div>
            <div>생일: {data.birthday}</div>
            <div>칭호: {data.style}</div>
            <div>평판: {data.reputation}</div>
            <div>경험치: {data.experience}</div>
          </div>
        </div>
        <div className="sub_status">
          <div className="basic">
            <div>HP: {data.hp}</div>
            <div>MP: {data.mp}</div>
            <div>STA: {data.sta}</div>
          </div>
          <div className="classic">
            <div>ATK: {data.atk}</div>
            <div>DEF: {data.def}</div>
            <div>AP: {data.ap}</div>
            <div>LUC: {data.luc}</div>
            <div>DEX: {data.dex}</div>
          </div>
        </div>
      </div>
      <div className="character_item_list"></div>
    </div>
  );
};

export default Character;
