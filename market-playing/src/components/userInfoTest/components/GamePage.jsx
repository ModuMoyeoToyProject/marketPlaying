/**
 * @FileName    : GamePage.jsx
 * @Description : 그라데이션
 * @History     : 2022.10.05.  리코더   임시페이지 생성
 *
 */

import React, { useState, useRef, useEffect } from "react";

import "../style/game.css";
import padNumber from "../common/Util.js";

const GamePage = (props) => {
  // --------------------------------------------- 낮밤 제어
  const [isNight, setIsNignt] = useState(true);
  const [gameMode, setGameMode] = useState("nightMode");
  const [userTimes, setUserTimes] = useState(0);
  const [userDays, setUserDays] = useState(0);
  const [userHour, setUserHour] = useState(0);
  const [userMin, setUserMin] = useState(0);

  let now = new Date();
  const interval = useRef(null);

  // --------------------------------------------- 현재시간
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);
  const [day, setDay] = useState(null);
  const [hour, setHour] = useState(null);
  const [min, setMin] = useState(null);
  const [sec, setSec] = useState(null);

  const addTime = (t) => {
    return () => {
      if (userTimes && t) {
        setUserTimes(userTimes + t);
      }
    };
  };

  // --------------------------------------------- 유저 잔액 증감
  const [userWallet, setUserWallet] = useState(0);

  const changeAmount = (m) => {
    return () => {
      console.log("changeAmount ", userWallet, m);
      setUserWallet(userWallet + m);
    };
  };

  const restart = () => {
    return () => {
      setUserWallet(0);
      setUserTimes(0);
      setIsNignt(true);
    };
  };

  useEffect(() => {
    if (isNight) {
      setGameMode("nightMode");
    } else {
      setGameMode("dayMode");
    }
  }, [isNight]);

  useEffect(() => {
    if (sec) {
      setUserTimes(userTimes + 1);
    }
  }, [sec]);

  useEffect(() => {
    if (userTimes) {
      // 1초에 1분
      let Day = parseInt(userTimes / (24 * 60));
      let Hour = parseInt((userTimes % (24 * 60)) / 60);
      let Min = (userTimes % (24 * 60)) % 60;

      setUserDays(Day);
      setUserHour(padNumber(Hour, 2));
      setUserMin(padNumber(Min, 2));
      setIsNignt(!(Hour > 5 && Hour < 18));
    }
  }, [userTimes]);

  useEffect(() => {
    // 타이머
    console.log(" now ", now);
    interval.current = setInterval(() => {
      now = new Date();
      setYear(padNumber(now.getFullYear(), 4));
      setMonth(padNumber(now.getMonth(), 2));
      setDay(padNumber(now.getDay(), 2));

      setHour(padNumber(now.getHours(), 2));
      setMin(padNumber(now.getMinutes(), 2));
      setSec(padNumber(now.getSeconds(), 2));
    }, 1000);
    // clean-up 함수 리턴!
    return () => clearInterval(interval.current);
  }, []);

  return (
    <div id="gameArea" className={"gameStyle"}>
      <div className={"controlArea " + gameMode}>
        <div className="pdd10">
          <button className="btn" onClick={restart()}>
            {"초기화"}
          </button>
        </div>
        <div className="pdd10">
          {"Now >"} {year} - {month} - {day} {hour} : {min} : {sec}
        </div>
        <div className="pdd10">
          {"Game User Time (낮:  06 ~ 18) >  "}
          {userDays > 0 ? userDays + "Days " : ""}
          {userHour > 0 ? userHour : "00"}
          {" : "}
          {userMin > 0 ? userMin : "00"}
          {/* {time} */}
        </div>
        <div className="pdd10">
          <button className="btn" onClick={addTime(720)}>
            {"+12시간 낮 밤 변경"}
          </button>
          <button className="btn" onClick={addTime(30)}>
            {"+30분"}
          </button>
          <button className="btn" onClick={addTime(-10)}>
            {"-10분"}
          </button>
        </div>
        <div className="pdd10">
          {"Wallet > "} {userWallet}
        </div>
        <div className="pdd10">
          <button className="btn" onClick={changeAmount(100)}>
            {"+100원"}
          </button>
          <button className="btn" onClick={changeAmount(500)}>
            {"+500원"}
          </button>
          <button className="btn" onClick={changeAmount(1000)}>
            {"+1000원"}
          </button>
        </div>
        <div className="pdd10">
          <button className="btn" onClick={changeAmount(-100)}>
            {"-100원"}
          </button>
          <button className="btn" onClick={changeAmount(-500)}>
            {"-500원"}
          </button>
          <button className="btn" onClick={changeAmount(-1000)}>
            {"-1000원"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
