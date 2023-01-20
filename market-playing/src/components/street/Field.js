import Reac, { useState, useRef, useEffect } from "react";
import grass1 from "../../img/grass_1.png";

const Field = () => {
  const [progressName, setProgressName] = useState({ display: "none" });
  const progressRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [start, setStart] = useState(false);

  let timer;
  const clickToGrow = () => {
    if (width === 0) {
      setStart(true);
      setProgressName({ display: "block" });
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
    }
  }, [width]);

  return (
    <div className="field" onClick={clickToGrow}>
      <img src={grass1}></img>
      <div className={"progress_bar progress_bar_wood"}>
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
