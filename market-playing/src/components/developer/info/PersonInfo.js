import React, { useState, useEffect } from "react";

const PersonInfo = ({ currentPerson, personList }) => {
  const [resultName, setResultName] = useState("");
  const [resultCharge, setResultCharge] = useState("");
  const [resultImage, setResultImage] = useState("");
  const [resultText, setResultText] = useState("");
  const [resultText2, setResultText2] = useState("");
  const [resultText3, setResultText3] = useState("");
  const [resultText4, setResultText4] = useState("");
  const [resultText5, setResultText5] = useState("");

  useEffect(() => {
    if (Object.keys(currentPerson).length == 0) {
      setResultName(personList[0].name);
      setResultCharge(personList[0].charge);
      setResultImage(personList[0].image);
      setResultText(personList[0].text);
      setResultText2(personList[0].text2);
      setResultText3(personList[0].text3);
      setResultText4(personList[0].text4);
      setResultText5(personList[0].text5);
    } else {
      setResultName(currentPerson.name);
      setResultCharge(currentPerson.charge);
      setResultImage(currentPerson.image);
      setResultText(currentPerson.text);
      setResultText2(currentPerson.text2);
      setResultText3(currentPerson.text3);
      setResultText4(currentPerson.text4);
      setResultText5(currentPerson.text5);
    }
  }, [currentPerson]);

  return (
    <div className="wrap">
      <div className="B">{resultCharge}</div>
      <div className="A">{resultName}</div>
      {/* 상세페이지 */}
      <div className="profile">
        <img className="circle" src="image/직사각형.png"></img>
      </div>
      <div
        style={{
          position: "absolute",
          width: "230px",
          height: "260px",
          marginLeft: "40px",
          marginTop: "67px",
        }}
      >
        <img className="profilephoto" src={resultImage}></img>
      </div>
      <div className="profiletxt">
        <br></br> <br></br>
        <div style={{ align: "left", marginLeft: "470px", marginTop: "-50px" }}>
          <p>
            {resultText} <br></br>
            {resultText2} <br></br>
            {resultText3}
            <br></br> {resultText4}
            <br></br>
            {resultText5}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonInfo;
