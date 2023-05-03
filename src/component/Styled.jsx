import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const H1 = styled.h1`
  color: pink;
`;

const Buttton = styled.button`
  background-color: ${(props) => props.bgColor};
  color: yellow;
  border: 0;
  padding: 10px 20px;
  border-radius: 10px;
`;
const Input = styled.input.attrs({ required: true, maxLength: 10 })`
  background-color: pink;
  padding-top: 10px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
`;

function Styled() {
  return (
    <Wrapper>
      <H1>styled-component</H1>
      <Buttton bgColor="pink">button 1</Buttton>
      <Buttton bgColor="black" as="a" href="https://www.google.com">
        test
      </Buttton>
      <br />
      <Input />
      <Input />
      <Input />
      <br />
      <Title>theme test</Title>
    </Wrapper>
  );
}

export default Styled;
