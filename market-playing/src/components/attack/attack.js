import { useState, useSyncExternalStore } from "react";
import styled from "styled-components";
import kirby from "../../img/kirby.gif";
import attackKirby from "../../img/attack_kirby.gif";
import parrot from "../../img/parrot.gif";
import fire from "../../img/fire.png";
import storeImg from "../../img/store_1.png";
//import mapData from "./mapData.json"; // 연동 미구현

import Monster from "./Monster";


const PanelContainer = styled.div`
  position: relative;
  width: 1024px;
  height: 600px;
  background-color: #df6464;
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

const Character = styled.img`
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

// 2023.01 lemon 몬스터 수정으로 주석처리
// const Monster = styled.div`
//   left: ${({ data }) => `${data.position.x}px`};
//   top: ${({ data }) => `${data.position.y}px`};
//   width: ${({ data }) => `${data.scale.x}px`};
//   height: ${({ data }) => `${data.scale.y}px`};
//   position: absolute;
//   z-index: 2;
//   img {
//     width: inherit;
//     -webkit-user-drag: none;
//   }
// `;

const Fire = styled.div`
  left: ${({ data }) => `${data.position.x}px`};
  top: ${({ data }) => `${data.position.y}px`};
  width: ${({ data }) => `${data.scale.x}px`};
  height: ${({ data }) => `${data.scale.y}px`};
  position: absolute;
  z-index: 2;
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
      actionArea: [],
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
      actionArea: [],
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
          color: "blue",
        },
      ],
      actionArea: [
        {
          id: "dance",
          name: "댄스",
          position: {
            x: 280,
            y: 400,
          },
          scale: {
            x: 50,
            y: 150,
          },
          src: "",
          color: "yellow",
        },
      ],
    },
  };

  const [nowMap, setNowMap] = useState("main-square");
  const [characterImg, setCharacterImg] = useState(kirby);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  }

  // setTimeout(() => {
  //   setMonster(
  //     monster.map((el) =>
  //       el.position.x > 0 &&
  //       el.position.x < 1024 &&
  //       el.position.y > 0 &&
  //       el.position.y < 600
  //         ? {
  //             ...el,
  //             position: {
  //               x: el.position.x + getRandomInt(-15, 15),
  //               y: el.position.y + getRandomInt(-15, 15),
  //             },
  //           }
  //         : {
  //             ...el,
  //             position: {
  //               x: -50,
  //               y: -50,
  //             },
  //           }
  //     )
  //   );
  // }, 1000);

  //   setTimeout(() => {
  //     setMonster(
  //       monster.filter(function (el) {
  //         return !(el.position.y > 600 || el.position.x > 1024);
  //       })
  //     );
  //   }, 1000);

  setTimeout(() => {
    setFires(
      fires.map((el) =>
        el.position.x > 0 &&
        el.position.x < 1024 &&
        el.position.y > 0 &&
        el.position.y < 600
          ? {
              ...el,
              position: {
                x:
                  el.position.x +
                  (el.direction === 37 ? -15 : el.direction === 39 ? 15 : 0),
                y:
                  el.position.y +
                  (el.direction === 38 ? -15 : el.direction === 40 ? 15 : 0),
              },
            }
          : {
              ...el,
              position: {
                x: -50,
                y: -50,
              },
            }
      )
    );
  }, 500);

  const [monster, setMonster] = useState([
    {
      id: 1,
      position: {
        x: 0,
        y: 0,
      },
      scale: {
        x: 50,
        y: 50,
      },
      visible: true,
      img: require("../../img/monster.gif"),
      speed: 500,
    },
    {
      id: 2,
      position: {
        x: 400,
        y: 500,
      },
      scale: {
        x: 50,
        y: 50,
      },
      visible: true,
      img: require("../../img/monster.gif"),
      speed: 1000,
    },
    {
      id: 3,
      position: {
        x: 700,
        y: 20,
      },
      scale: {
        x: 50,
        y: 50,
      },
      visible: true,
      img: require("../../img/monster.gif"),
      speed: 700,
    },
    {
      id: 4,
      position: {
        x: 600,
        y: 560,
      },
      scale: {
        x: 50,
        y: 50,
      },
      visible: true,
      img: require("../../img/monster.gif"),
      speed: 850,
    },
  ]);

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

    if (checkActionArea(x, y)) {
      setCharacterImg(kirby);
    } else {
      console.log("hi");
      setCharacterImg(parrot);
    }
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

  //  const handleBuildingClicked = e => {
  //     e.stopPropagation();
  //     moveCharacter(512, 300);
  //     // navigate(`/${e.target.id}`);
  //     props.fn_move(e.target.id);
  //  };

  const handlePrevent = (e) => {
    e.stopPropagation();
  };

  // 특정 위치(actionArea)로 가면 상태 변화하기 (캐릭터 모션 변경)
  const checkActionArea = (x, y) => {
    let flag = true;
    if (mapList[nowMap].actionArea.length !== 0) {
      mapList[nowMap].actionArea.forEach((item, index) => {
        if (
          item.position.x < x &&
          x < item.position.x + item.scale.x &&
          item.position.y < y &&
          y < item.position.y + item.scale.y
        ) {
          console.log("action");
          flag = false;
        }
      });
    }
    return flag;
  };

  const [prevKeyCode, setPrevKeyCode] = useState(39);

  const handleKeyDown = (event) => {
    console.log(event.keyCode);
    if (
      event.keyCode === 37 ||
      event.keyCode === 38 ||
      event.keyCode === 39 ||
      event.keyCode === 40
    ) {
      setPrevKeyCode(event.keyCode);
    }
    if (event.keyCode === 32) {
      setCharacterImg(attackKirby);

      fireBall();

      setTimeout(() => {
        setCharacterImg(kirby);
      }, 3000);
    }
  };

  const [fires, setFires] = useState([]);

  const fireBall = () => {
    setFires(
      fires.concat({
        id: fires.length,
        position: {
          x: obj.x,
          y: obj.y,
        },
        scale: {
          x: 30,
          y: 30,
        },
        visible: true,
        direction: prevKeyCode,
      })
    );
  };

  return (
    <PanelContainer
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseUp={handleInside}
    >
      <Character
        src={characterImg}
        obj={obj}
        onMouseUp={handlePrevent}
      ></Character>
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
          // onMouseUp={handleBuildingClicked}
          onClick={props.fn_move(item.id)}
          bgColor={item.color}
        >
          {item.src ? (
            <img id={item.id} src={item.src} alt={item.id}></img>
          ) : (
            ""
          )}
        </BuildingArea>
      ))}

      {/* {monster.map((item, index) => (
        <Monster key={index} id={item.id} data={item}>
          <img id={item.id} src={item.img} alt={item.id} />
        </Monster>
        
      ))} */}

      {monster.map((item, index) => 
        <Monster key={index} id={item.id} 
                      position={item.position} scale={item.scale}
                      img={item.img}  speed={item.speed} />
      )}

      {fires.map((item, index) => (
        <Fire key={index} id={item.id} data={item}>
          <img id={item.id} src={fire} alt={item.id}/>
        </Fire>
      ))}
    </PanelContainer>
  );
};

export default Panel;
