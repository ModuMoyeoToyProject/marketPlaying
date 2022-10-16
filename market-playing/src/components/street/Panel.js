import { useState } from "react";
import styled from "styled-components";
import kirby from "../../img/kirby.gif";
import storeImg from "../../img/store_1.png";
import { useNavigate } from "react-router-dom";
//import mapData from "./mapData.json"; // 연동 미구현

const PanelContainer = styled.div`
  position: relative;
  width: 1024px;
  height: 600px; 
  z-index: 1;
`;

const Background = styled.div`
  width: 1024px;
  height: 180px;
  left: 0;
  top: 0px;
  background-color: ${({ bgColor }) => bgColor};
  position: absolute;
  z-index: 2;
  font-size: 30px;
  font-weight: 900;
  color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
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

const WarpArea = styled.div`
  left: ${({ data }) => `${data.position.x}px`};
  top: ${({ data }) => `${data.position.y}px`};
  width: ${({ data }) => `${data.scale.x}px`};
  height: ${({ data }) => `${data.scale.y}px`};
  position: absolute;
  z-index: 2;
  background-color: tomato;
`;

const BuildingArea = styled.div`
  left: ${({ data }) => `${data.position.x}px`};
  top: ${({ data }) => `${data.position.y}px`};
  width: ${({ data }) => `${data.scale.x}px`};
  height: ${({ data }) => `${data.scale.y}px`};
  position: absolute;
  z-index: 2;
  background-color: ${({ bgColor }) => bgColor};
  img {
    width: inherit;
    -webkit-user-drag: none;
  }
`;

const Panel = (props) => {
  const mapList = {
    "main-square": {
      name: "중앙 광장",
      background: "yellowgreen",
      warpArea: [
        {
          id: "shop-street",
          name: "상점가",
          position: {
            x: 994,
            y: 200,
          },
          scale: {
            x: 30,
            y: 120,
          },
        },
        {
          id: "mountain",
          name: "마을 뒷 산",
          position: {
            x: 0,
            y: 200,
          },
          scale: {
            x: 30,
            y: 120,
          },
        },
      ],
      buildingArea: [],
    },
    "shop-street": {
      name: "상점가",
      background: "green",
      warpArea: [
        {
          id: "main-square",
          name: "중앙 광장",
          position: {
            x: 0,
            y: 200,
          },
          scale: {
            x: 30,
            y: 120,
          },
        },
      ],
      buildingArea: [
        {
          id: "shop",
          name: "철물점",
          position: {
            x: 750,
            y: 300,
          },
          scale: {
            x: 240,
            y: 200,
          },
          src: storeImg,
          backgroundForTest: "",
        },
      ],
    },
    mountain: {
      name: "마을 뒷 산",
      background: "green",
      warpArea: [
        {
          id: "main-square",
          name: "중앙 광장",
          position: {
            x: 994,
            y: 200,
          },
          scale: {
            x: 30,
            y: 120,
          },
        },
      ],
      buildingArea: [
        {
          id: "lake",
          name: "호수",
          position: {
            x: 40,
            y: 400,
          },
          scale: {
            x: 240,
            y: 150,
          },
          src: "",
          backgroundForTest: "blue",
        },
      ],
    },
  };

  const [nowMap, setNowMap] = useState("main-square");
  const navigate = useNavigate();

  const [obj, setObj] = useState({
    sizeX: 50,
    sizeY: 50,
    x: 512,
    y: 300,
  });

  const moveCharacter = (x, y) => {
    setObj((prev) => ({
      ...prev,
      x: x,
      y: y,
    }));
    console.log(x, y);
  };

  const handleInside = (e) => {
    let { x, y } = e.target.getBoundingClientRect();
    moveCharacter(
      e.pageX - x < obj.sizeX / 2 ? obj.sizeX / 2 : e.pageX - x,
      e.pageY - y < obj.sizeY / 2 ? obj.sizeY / 2 : e.pageY - y
    );
  };

  const handleOutside = (e) => {
    setNowMap(e.target.id);
    moveCharacter(512, 300);
  };

  const handleBuildingClicked = (e) => {
    e.stopPropagation();
    moveCharacter(512, 300);
    // navigate(`/${e.target.id}`);
    props.fn_move(e.target.id);
    /* 
    하돌님 help .. 함수가 안먹는 이유가 뭘까요?

    */
    
  };

  const handlePrevent = (e) => {
    e.stopPropagation();
  };

  return (
    <PanelContainer onMouseUp={handleInside}>
      <Kirby src={kirby} obj={obj} onMouseUp={handlePrevent}></Kirby>
      <Background
        bgColor={mapList[nowMap].background}
        onMouseUp={handlePrevent}
      >
        {mapList[nowMap].name}
      </Background>

      {/**
       * 워프 영역 렌더링 ---------------------------------------------------------------
       */}
      {mapList[nowMap].warpArea.map((item, index) => (
        <WarpArea key={index} id={item.id} data={item} onClick={handleOutside}>
          {item.name}
        </WarpArea>
      ))}

      {/**
       * 건물 영역 렌더링 ---------------------------------------------------------------
       */}
      {mapList[nowMap].buildingArea.map((item, index) => (
        <BuildingArea
          key={index}
          id={item.id}
          data={item}
          onMouseUp={handleBuildingClicked}
          bgColor={item.backgroundForTest}
        >
          {item.src ? (
            <img id={item.id} src={item.src} alt={item.id}></img>
          ) : (
            ""
          )}
        </BuildingArea>
      ))}
    </PanelContainer>
  );
};

export default Panel;
