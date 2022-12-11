import Lake from "../components/game/Lake";
import AutoUP from "../components/game/AutoUP";
import "../styles/Home.css";

function Home() {
  return (
    <div className="Home">
      <Lake />
      <AutoUP
        progressMessage={"뚝딱뚝딱!"}
        completeMessage={"완성되었습니다."}
        title={"만들기"}
      />
      <AutoUP
        progressMessage={"영차영차!"}
        completeMessage={"나무를 패었습니다."}
        title={"나무패기"}
      />
      <AutoUP
        progressMessage={"사각사각!"}
        completeMessage={"양털이 나왔습니다."}
        title={"양털깎기"}
      />
    </div>
  );
}

export default Home;
