import { useState } from "react";
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
  background-color: skyblue;
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
  background-color: yellowgreen;
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

const Street = () => {
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
      <Panel onMouseUp={handleMouseMove}>
        <Kirby src={kirby} obj={obj} onMouseUp={handlePrevent}></Kirby>
        <Grass onMouseUp={handlePrevent}>배경</Grass>
        <Store1 onMouseUp={handlePrevent}>
          <img src={store1} alt="store1"></img>
        </Store1>
      </Panel>
    </Container>
  );
};

export default Street;
