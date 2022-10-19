/**
 * @FileName    : UserInfo.jsx
 * @Description : 개발항목 List
 * @History     : 2022.10.07.  리코더     유저정보 표기영역
 * 
 */
import React, { useState, useRef, useEffect } from 'react';


const padNumber = (num, length) => {
    // console.log("padNumber ", num, length);
    return String(num).padStart(length, '0');
};

const GamePage = ({
                userName
                , days = 0
                , hour = "00"
                , min = "00"
                , isNight = true
                , amount = 0
                , fn_addTime 
}) => { 

    return (
    <div>
    <div style={{justifyContent: "flex-start", flexDirection: "row", display: "flex"}}>
        <div className="userArea rdBox1" >
            <span className="span">접속자 : </span> 
            <span className="span">{userName}</span> 
        </div>
        <div className="userArea rdBox1" >
            <span className="span">{(isNight?"Night":"Day")}</span>  
            <button className="span" onClick={fn_addTime(60)}>{"+1시간"}</button>
        </div>
        <div className="userArea rdBox1" >
            <span className="span">시간 : </span> 
            <span className="span">
                {(days > 0 ? days + "Days " : "")}
                {hour}
                {" : "}
                {min}
            </span> 
        </div>
        <div className="userArea rdBox1" >
            <span className="span">잔액 : </span> 
            <span className="span">{amount}</span> 
        </div> 
    </div>

    <div style={{justifyContent: "flex-start", flexDirection: "row", display: "flex"}}>
    <div className="userArea "></div>
    <div className="userArea "><span className="span desc">낮 : 06 ~ 18시</span></div>
    <div className="userArea "></div>
    <div className="userArea "></div> 
    </div>
    </div>
    );
}


export default GamePage;