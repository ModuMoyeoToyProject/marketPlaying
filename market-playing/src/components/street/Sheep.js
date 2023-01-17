import hoistNonReactStatics from "hoist-non-react-statics";
import { useState, useEffect, useRef } from "react";
import Shearing from "../../img/sheep_shearing.gif";

const Sheep = (props) => {
  const [status, setStatus] = useState("full");
  const [sheepGrowNo, setSheepGrowNo] = useState(3);
  const [shearingFlag, setShearingFlag] = useState("succ");

  const progressRef = useRef(null);
  const [progressWidth, setProgressWidth] = useState(5);
  const [progressName, setProgressName] = useState({ display: "none" });
  const [start, setStart] = useState(false);
  const [randTime, setRandTime] = useState(500);
  const [randMeter, setRandMeter] = useState(5);
  let timer;
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  const sheepClick = (e) => {
    // console.log("fff",e);
    // if(status == "full"){
    // setStatus("zero");
    if (shearingFlag == "succ" && progressWidth < 100) {
      setShearingFlag("wait");
    }

    if (progressWidth === 5) {
      setStart(true);
    }
    if (progressWidth <= 0) {
      let newWidth = 10;
      setProgressWidth(newWidth);
    } else if (progressWidth <= 95) {
      let newWidth = progressWidth + 10;
      if (newWidth >= 100) {
        newWidth = 150;
        // console.log('병어를 잡았습니다.');
        setShearingFlag("succ");
        setStatus("zero");
        // clearInterval(timer);
        // setStart(false);
      } else {
        console.log("챔챔챔!");
      }
      setProgressWidth(newWidth);
      // }else if(progressWidth === 0){
      //    console.log('물고기를 놓쳤습니다.');
      //       clearInterval(timer);
      //       setStart(false);
      // }else{
      //       console.log('병어를 잡았습니다.');
      //       clearInterval(timer);
      //       setStart(false);
    }
    // } else if(status == "zero"){
    //    setStatus("half");
    // } else if(status == "half"){
    //    setStatus("full");
    // }
  };

  useEffect(() => {
    if (status == "zero") {
      setSheepGrowNo(1);
    } else if (status == "half") {
      setSheepGrowNo(2);
    } else if (status == "full") {
      setSheepGrowNo(3);
    }
  }, [status]);

  useEffect(() => {
    console.log(shearingFlag, "  ", progressWidth);

    if (progressWidth <= 5) {
      // 멈춰라 제발!
      setStatus("full");
      setProgressName({ display: "none" });
    } else if (progressWidth > 50 && progressWidth < 100) {
      setStatus("half");
      if (shearingFlag == "succ") {
        setProgressName({ display: "none" });
      } else {
        setProgressName({});
      }
    } else if (progressWidth > 100) {
      setProgressName({ display: "none" });
    } else {
      if (shearingFlag == "succ") {
        setProgressName({ display: "none" });
      } else {
        setProgressName({});
      }
    }
  }, [progressWidth]);

  useEffect(() => {
    if (start) {
      let randTime = 500; //getRandomArbitrary(200, 5000);
      let randMeter = 5; //getRandomArbitrary(1, 50);
      setRandTime(randTime);
      setRandMeter(randMeter);

      //   console.log("setRandTime",randTime);
      //   console.log("setRandMeter",randMeter);

      timer = setInterval(() => {
        setProgressWidth((width) => width - randMeter);
        // console.log("얍얍",width);
      }, randTime);
    }
    return () => {
      clearInterval(timer);
    };
  }, [start]);

  return (
    <>
      {/* <div onclick={sheepClick}> */}
      {/* <div onclick={()=>{sheepClick()}}> */}
      {/* <img className="shearing" style={progressName}
            src={Shearing} 
            // onMouseUp={sheepClick}
         />  */}
      <img
        className="sheep"
        id={props.sheepNm}
        src={require("../../img/sheep_" + sheepGrowNo + ".png")}
        onMouseUp={sheepClick}
      />
      <div className={"progress_bar"} style={progressName}>
        <div
          className="progress"
          ref={progressRef}
          style={{ width: (progressWidth > 100 ? 100 : progressWidth) + "%" }}
        ></div>
      </div>
      {/* </div>  */}
      {/* <img src={require('../../img/kirby.gif')}/> */}
    </>
  );
};

export default Sheep;
