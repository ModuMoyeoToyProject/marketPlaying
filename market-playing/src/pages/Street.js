import styled from "styled-components";
import Panel from "../components/street/Panel";
//import Panel from "../components/shop/ShopFormat";
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

const Street = () => {
  return (
    <Container>
      <Title>커비의 나들이</Title>
      <Panel />
    </Container>
  );
};

export default Street;
