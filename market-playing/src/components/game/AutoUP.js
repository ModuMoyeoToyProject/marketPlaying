import { useEffect, useRef, useState } from "react";

const AutoUP = (props) => {
  const { progressMessage, completeMessage, title } = props;
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  const [message, setMessage] = useState("만들기 버튼을 클릭하세요");
  const [start, setStart] = useState(false);
  const [randTime, setRandTime] = useState(500);
  const [randMeter, setRandMeter] = useState(5);

  let timer;

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  useEffect(() => {
    if (start) {
      setRandTime(getRandomArbitrary(200, 5000));
      setRandMeter(getRandomArbitrary(1, 50));

      timer = setInterval(() => {
        setWidth((width) => width + randMeter);
        console.log("얍얍", width);
      }, randTime);
    }
    return () => {
      clearInterval(timer);
    };
  }, [start]);

  useEffect(() => {
    if (width >= 100) {
      setMessage(completeMessage);
      clearInterval(timer);
      setStart(false);
    } else {
      setMessage(progressMessage);
    }
  }, [width]);

  // 낚시대 레벨
  const level = [5, 7, 10, 20];

  const up = () => {
    if (width === 0) {
      setStart(true);
    }
  };

  return (
    <div className="lake">
      <h1>{title}</h1>
      <div className="progress_bar">
        <div
          className="progress"
          ref={ref}
          style={{ width: width + "%" }}
        ></div>
        <p>{message}</p>
        <button onClick={up}>{title}</button>
      </div>
    </div>
  );
};

export default AutoUP;
