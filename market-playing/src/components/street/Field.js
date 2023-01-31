import Reac, { useState, useRef, useEffect } from "react";
import grassSrc from "../../img/grass_1.png";
import grassSrc2 from "../../img/grass_2.png";

const Field = () => {
  const [progressName, setProgressName] = useState({ display: "none" });
  const [grassState, setGrassState] = useState(null);
  const progressRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [start, setStart] = useState(false);

  let timer;
  const clickToGrow = () => {
    if (width === 0) {
      setStart(true);
      setProgressName({ display: "block" });
    } else if (width === 50) {
      console.log(grassState, "src");
    }
  };

  useEffect(() => {
    if (start) {
      let randMeter = 5;

      timer = setInterval(() => {
        setWidth((width) => width + randMeter);
      }, 500);
    }
    return () => {
      clearInterval(timer);
    };
  }, [start]);

  useEffect(() => {
    if (width >= 100) {
      clearInterval(timer);
      setStart(false);
      setProgressName({ display: "none" });
      setWidth(0);
      setGrassState(null);
    } else if (width > 30 && width < 80) {
      setGrassState(grassSrc);
    } else if (width > 80) {
      setGrassState(grassSrc2);
    }
  }, [width]);

  return (
    <div className="field">
      <div className="grass_box" id="grow" onClick={clickToGrow}>
        <img src={grassState}></img>
      </div>
      <div className={"progress_bar progress_bar_wood"} style={progressName}>
        <div
          className="progress progress_wood"
          ref={progressRef}
          style={{ width: (width > 100 ? 100 : width) + "%" }}
        ></div>
      </div>
    </div>
  );
};

export default Field;
