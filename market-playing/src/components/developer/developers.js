import React, { useState, useEffect } from "react";
import "../../styles/Developers.css";
import PersonInfo from "./info/PersonInfo";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination]);

const Developers = () => {
  const [personList, setPersonList] = useState([
    {
      name: "윤지애",
      charge: "Frontend",
      src: "image/윤지애님.png",
      image: "image/윤지애님투명.png",
      text: "항상 도전하고 성장하는 프론트엔드 개발자입니다.",
      text2: "많은 사람들과 소통하며 발전할 수 있어 좋았습니다.",
    },
    {
      name: "임현석",
      charge: "Backend",
      src: "image/임현석님.png",
      image: "image/임현석님투명.png",
      text: "AI와 Web 및 DevOps 분야에 흥미가 있어 최신 기술 트렌드를 공부하는 중입니다.",
      text2:
        "불편한 것을 편리한 것으로 바꾸는 과정에서 새로운 기술들을 터득하기 위한 동기와 재미가 생기게 되네요.",
      text3: "스스로에게 질문하고 꾸준히 성장하는 개발자가 되고 싶습니다.",
      text4: " Django 웹 프레임워크를 활용하여 REST API 서버를 개발했습니다.",
      text5:
        "Git을 활용한 협업 경험이 부족했었는데 이번 기회에 팀원과의 의사소통 능력과 팀 프로젝트 경험을 키우는 데 도움이 되었습니다.",
    },
    {
      name: "우유정",
      charge: "Designer",
      src: "image/우유정님.png",
      image: "image/우유정님투명.png",
      text: "우유는 생우유도 요구르트로도 치즈로도 변신할 수 있습니다.",
      text2:
        "지금은 우유지만 저를 성장시켜 성숙한 치즈와 요구르트가 되고 싶습니다.",
    },
    {
      name: "이은영",
      charge: "Frontend",
      src: "image/이은영님.png",
      image: "image/이은영님투명.png",
      text: "깊이 성장하고싶은 풀스택 개발자입니다.",
      text2:
        "물경력 탈출하려고 토이플을 하게되었는데, 함께하는 협업과 리액트와 Git을 연습할 수 있어서 좋은 경험이었습니다.",
    },
    {
      name: "레제",
      charge: "Publisher",
      src: "image/윤지애2.png",
      image: "image/윤지애2투명.png",
      text: "항상 도전하고 성장하는",
    },
  ]);
  const [currentPerson, setCurrentPerson] = useState({});

  useEffect(() => {
    console.log(currentPerson);
  }, [currentPerson]);

  const personInfo = (index) => {
    let tempPerson = personList[index];
    setCurrentPerson(tempPerson);
  };

  return (
    <div className="wrap">
      <div>
        <Swiper
          className="banner"
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>Slide1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
      <div className="dvelopers">
        {personList.map((data, index) => {
          return (
            <a>
              <div className="img" onClick={(e) => personInfo(index)}>
                <img className="photo" src={data.src} alt="" />
              </div>
              <span>{data.charge}</span>
              <em>{data.name}</em>
            </a>
          );
        })}
      </div>
      <PersonInfo currentPerson={currentPerson} personList={personList} />
    </div>
  );
};

export default Developers;
