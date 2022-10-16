/**
 * @FileName    : GameMain.jsx
 * @Description : 개발항목 List
 * @History     : 2022.10.07.  리코더     페이지 생성/하돌님 Street에 유저정보추가
 *              : 2022.10.16.  리코더     하돌님 2차미션 추가 
 *              : 2022.10.16.  리코더     상점 구매 / 판매 
 * 
 */
import React, { useState, useRef, useEffect } from 'react';

import UserInfo from '../components/gameMain/UserInfo';

import "../styles/Game.scss";

import styled from "styled-components";
import Panel from "../components/street/Panel";
import Lake from '../components/game/Lake';
import ShopFormat from "../components/shop/ShopFormat";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-user-drag: none;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  z-index: 999;
`;


const padNumber = (num, length) => {
  // console.log("padNumber ", num, length);
  return String(num).padStart(length, '0');
};

// --------------------------------------------- contenst
const GameMain = () => {
  // --------------------------------------------- USER 기본정보
  const [userName, setUserName] = useState("커비"); 

  // --------------------------------------------- 낮밤 제어
  const [isNight, setIsNignt] = useState(true);
  const [dayNightMode, setDayNightMode] = useState("nightMode");
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


  // --------------------------------------------- 메뉴제어
  const [menuId, setMenuId] = useState("street"); 
  const [preMenuId, setPreMenuId] = useState("");

  const changeMenu = (tobe) => {
    return () => {
      console.log(tobe);
      if(menuId != tobe){ 
        setPreMenuId(menuId);
        setMenuId(tobe); 
      } 
    }; 
  }; 



  // --------------------------------------------- 유저 잔액 증감
  const [userWallet, setUserWallet] = useState(0);  
  const [userBag, setUserBag] = useState([]);  

  const changeAmount = (m) => { 
    console.log("changeAmount ", userWallet, m);  
    setUserWallet(userWallet+m);  
  };

  const updateBag = (item, price, count) => {  
    return () => {  
      console.log( item, price, count); 
      let totalPrice = price * count * -1 ;
      if(price == 0 && count == 0){
        setUserWallet(0);
        return;
      }
      console.log("totalPrice : ",totalPrice); 
      if(totalPrice){
        if(userWallet + totalPrice < 1){
          alert("잔액부족");
          return;
        }
        changeAmount(totalPrice); 
      } 
    }; 
  };

  const showBag = () => {  
    return () => {  
    }; 
  };

  const hideBag = () => {  
    return () => {  
    }; 
  };

  useEffect(() => {
      if(isNight){
        setDayNightMode("nightMode");
      } else {
        setDayNightMode("dayMode");
      } 
  }, [isNight]);

  useEffect(() => {
      if(sec){
          setUserTimes(userTimes+1); 
      } 
  }, [sec]);  

  useEffect(() => {
      if(userTimes){
          // 1초에 1분
          let Day = parseInt(userTimes / (24*60));
          let Hour = parseInt((userTimes % (24*60)) / 60);
          let Min = ((userTimes % (24*60)) % 60);
                      
          setUserDays(Day);
          setUserHour(padNumber(Hour, 2));
          setUserMin(padNumber(Min, 2));
          setIsNignt(!(Hour > 5 && Hour <18));
      } 
  }, [userTimes])


  useEffect(() => {
      // 타이머
      console.log(" now ",now);
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


  // --------------------------------------------- 낮 밤 테스트
  const addTime = (t) => {
    return () => {
        if(userTimes && t){
            setUserTimes(userTimes+t);
        } 
    }; 
  };

  const restart = () => {
      return () => {
          setUserWallet(0); 
          setUserTimes(0);
          setIsNignt(true);
      }; 
  };



 

  return (
    <Container>
      <Title>커비의 중앙시장 나들이</Title>
      <UserInfo
        userName={userName} 
        days={userDays} 
        hour={userHour} 
        min={userMin} 
        isNight={isNight}  
        fn_addTime={addTime}
        amount={userWallet} 
        fn_updateBag={updateBag}
        preMenu={preMenuId} 
        fn_move={changeMenu}
        fn_showBag={showBag}
      ></UserInfo> 
      {/* 거리 */}
      <div className={dayNightMode + " area " + (menuId=="street"?"on":"off")}>
        <Panel
          preMenu={preMenuId}
          fn_move={changeMenu} 
        /> 
      </div>
      {/* 상점 */}
      <div className={"area " + (menuId=="shop"?"on":"off")}>
        <ShopFormat 
          imgStyle={"off"}
          fn_updateBag={updateBag}
        /> 
      </div>
      {/* 미니게임 */}
      <div className={"area " + (menuId=="lake"?"on":"off")}>
        <Lake />
      </div>
    </Container>
  );
};

export default GameMain;
