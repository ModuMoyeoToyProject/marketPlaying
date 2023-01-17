/**
 * @FileName    : UserInfo.jsx
 * @Description : 개발항목 List
 * @History     : 2022.10.07.  리코더     유저정보 표기영역
 *              : 2022.11.14.  리코더     인벤토리 붙이기 
 * 
 *
 */
import React, { useState, useRef, useEffect } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";


const padNumber = (num, length) => {
  // console.log("padNumber ", num, length);
  return String(num).padStart(length, "0");
};

const GamePage = ({
  userName,
  days = 0,
  hour = "00",
  min = "00",
  isNight = true,
  amount = 0,
  fn_addTime,
  preMenu = "",
  fn_move,
  fn_updateBag,
  fn_showBag,
}) => {
  return (
    <div>
      <div
        style={{
          justifyContent: "flex-start",
          flexDirection: "row",
          display: "flex",
        }}
      >
        <div className="userArea rdBox1">
          <span className="span">접속자 : </span>
          <span className="span">{userName}</span>
          <button className="span" onClick={fn_move("status")}>
            {"status"}
          </button>
          <button className="span" onClick={fn_showBag()}>
            {"가방"}
          </button> 
        </div>
        <div className="userArea rdBox1">
          <span className="span">{isNight ? "Night" : "Day"}</span>
          <button className="span" onClick={fn_addTime(720)}>
            {"+12시간(낮<->밤)"}
          </button>
        </div>
        <div className="userArea rdBox1">
          <span className="span">시간 : </span>
          <span className="span">
            {days > 0 ? days + "Days " : ""}
            {hour}
            {" : "}
            {min}
          </span>
        </div>
        <div className="userArea rdBox1">
          <span className="span">잔액 : </span>
          <span className="span">{amount}</span>
        </div>
        <div className="userArea rdBox1">
          <span className="span">이전메뉴 : </span>
          <span className="span">{preMenu}</span>
          <button className="span" onClick={fn_move(preMenu)}>
            {"돌아가기"}
          </button>
        </div>
      </div>

      <div
        style={{
          justifyContent: "flex-start",
          flexDirection: "row",
          display: "flex",
        }}
      >
        <div className="userArea "></div>
        <div className="userArea ">
          <span className="span desc">낮 : 06 ~ 18시</span>
        </div>
        <div className="userArea ">
          <button className="span" onClick={fn_addTime(10)}>
            {"+10분"}
          </button>
          <button className="span" onClick={fn_addTime(-10)}>
            {"-10분"}
          </button>
        </div>
        <div className="userArea ">
          <button className="span" onClick={fn_updateBag({}, 1000, 1)}>
            {"-1000"}
          </button>
          <button className="span" onClick={fn_updateBag({}, 1000, -1)}>
            {"+1000"}
          </button>
          <button className="span" onClick={fn_updateBag({}, 0, 0)}>
            {"0"}
          </button>
        </div>
        <div className="userArea ">
          <button className="span" onClick={fn_move("lake")}>
            {"호수"}
          </button>
          <button className="span" onClick={fn_move("shop")}>
            {"상점"}
          </button>
          <button className="span" onClick={fn_move("street")}>
            {"거리"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
