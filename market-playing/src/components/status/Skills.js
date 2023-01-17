import React from "react";

const Skills = () => {
  const skillsData = [
    {
      type: "fire",
      name: "화염불꽃",
      status: "Y", // 보유 - Y, 미보유 - N
      level: "1",
      skillPoint: "1",
      skillExp: "10",
      skillImg: " ",
    },
    {
      type: "water",
      name: "첨벙첨벙",
      status: "N",
      level: "",
      skillPoint: "",
      skillExp: "",
      skillImg: "",
    },
    {
      type: "ligntning",
      name: "전류의힘",
      status: "N",
      level: "",
      skillPoint: "",
      skillExp: "",
      skillImg: "",
    },
  ];

  const [skillsList, setSkillsList] = React.useState(skillsData);

  return (
    <div>
      <div>
        {/* 각 속성 별 클릭시 필터 후 새로 리스트에 넣어줘야 함. */}
        <div>불</div>
        <div>물</div>
        <div>번개</div>
        <div>땅</div>
        <div>유틸</div>
      </div>

      <div>
        {/* 보유 스킬 */} 
          <div>

          </div>

        {/* 미보유 스킬 */}
          <div>
            
          </div>
      </div>
    </div>
  );
};

export default Skills;
