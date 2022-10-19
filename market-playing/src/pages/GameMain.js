/**
 * @FileName    : GameMain.jsx
 * @Description : 개발항목 List
 * @History     : 2022.10.07.  리코더     페이지 생성/하돌님 Street에 유저정보추가
 * 
 */
import React, { useState, useRef, useEffect } from 'react';

import UserInfo from '../components/gameMain/UserInfo';

import "../styles/Game.scss";

import styled from "styled-components";
import kirby from "../img/kirby.gif";
import store1 from "../img/store_1.png";

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
`;

const Panel = styled.div`
  position: relative;
  width: 1024px;
  height: 600px;
  z-index: 1;
`;

const preventArea = styled.div`
  position: absolute;
  z-index: 2;
`;

const Grass = styled(preventArea)`
  width: 1024px;
  height: 180px;
  left: 0;
  top: 0px;
  background-color: yellowGreen; 
  font-size: 30px;
  font-weight: 900;
  color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Store1 = styled(preventArea)`
  width: 240px;
  height: 200px;
  top: 300px;
  left: 750px;
  img {
    width: inherit;
    -webkit-user-drag: none;
  }
`;

const Kirby = styled.img`
  position: relative;
  width: ${(props) => `${props.obj.sizeX}px`};
  height: ${(props) => `${props.obj.sizeY}px`};
  left: ${(props) => `${props.obj.x - props.obj.sizeX / 2}px`};
  top: ${(props) => `${props.obj.y - props.obj.sizeY / 2}px`};
  z-index: 99;
  -webkit-user-drag: none;
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


  // --------------------------------------------- 유저 잔액 증감
  const [userWallet, setUserWallet] = useState(0); 
    

  const changeAmount = (m) => {
      return () => {
          console.log("changeAmount ", userWallet, m);  
          setUserWallet(userWallet+m); 
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




  // --------------------------------------------- 배경 / 캐릭터 제어
  const [obj, setObj] = useState({
    sizeX: 50,
    sizeY: 50,
    x: 512,
    y: 300,
  });

  const handleMouseMove = (e) => {
    let { x, y } = e.target.getBoundingClientRect();
    let positionX = e.pageX - x < obj.sizeX / 2 ? obj.sizeX / 2 : e.pageX - x;
    let positionY = e.pageY - y < obj.sizeY / 2 ? obj.sizeY / 2 : e.pageY - y;
    setObj((prev) => ({
      ...prev,
      x: positionX,
      y: positionY,
    }));
  };

  const handlePrevent = (e) => {
    e.stopPropagation();
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
        amount={userWallet} 
        fn_addTime={addTime} 
      ></UserInfo>
      <Panel className={dayNightMode} onMouseUp={handleMouseMove}>
        <Kirby src={kirby} obj={obj} onMouseUp={handlePrevent}></Kirby>
        <Grass onMouseUp={handlePrevent}>배경</Grass>
        <Store1 onMouseUp={handlePrevent}>
          <img src={store1} alt="store1"></img>
        </Store1>
      </Panel>
    </Container>
  );
};

export default GameMain;
