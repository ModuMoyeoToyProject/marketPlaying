// import { useState } from 'react';
// import styled from 'styled-components';
// import kirby from '../../img/sheep_1';

import Sheep from "./Sheep";

const Sheeps = (props) => {
  console.log(props)
  return (
    <>
      <div className={"sheepArea"}>
        <div className={"sheep1"}>
          <Sheep sheepNm="sheep1"></Sheep>
        </div>
        <div className={"sheep2"}>
          <Sheep sheepNm="sheep2"></Sheep>
        </div>
        <div className={"sheep3"}>
          <Sheep sheepNm="sheep3"></Sheep>
        </div>
      </div>
    </>
  );
};

export default Sheeps;
