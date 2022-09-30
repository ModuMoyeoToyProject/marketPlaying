import { useEffect, useRef, useState } from "react";

const Lake = () => {
    const ref = useRef(null);
    const [width, setWidth] = useState(5);
    const [message, setMessage] = useState('챔질 버튼을 클릭하세요');
    const [start, setStart] = useState(false);
    const [randTime, setRandTime] = useState(500);
    const [randMeter, setRandMeter] = useState(5);

    let timer;

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    useEffect(() => {
        if(start){
            setRandTime(getRandomArbitrary(200, 5000));
            setRandMeter(getRandomArbitrary(1, 50));

            timer = setInterval(() => {
                setWidth(width => width - randMeter);
                console.log("얍얍",width);
            }, randTime);
        }
        return () => {
            clearInterval(timer);
        }
    }, [start]);

    // 낚시대 레벨
    const level = [5, 7, 10, 20];

    const up = () => {
        if(width === 5){
            setStart(true);
        }
        if(width <= 95){
            let newWidth = width + 20;
            if (newWidth >= 100){
                newWidth = 100
                setMessage('병어를 잡았습니다.');
                clearInterval(timer);
                setStart(false);
            }else{
                setMessage("챔챔챔!");
            }
            setWidth(newWidth);
        }else if(width === 0){
            setMessage('물고기를 놓쳤습니다.');
            clearInterval(timer);
            setStart(false);
        }else{
            setMessage('병어를 잡았습니다.');
            clearInterval(timer);
            setStart(false);
        }
    }


    return (
    <div className="lake">
        <h1>병어잡기</h1>
        <div className="progress_bar">
            <div className="progress" ref={ref} style={{width: width + '%'}}></div>
            <p>{message}</p>
            <button onClick={up}>챔질</button>
        </div>
    </div>
    );
}

export default Lake;