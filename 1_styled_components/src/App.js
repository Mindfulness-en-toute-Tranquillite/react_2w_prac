import './App.css';
import styled from "styled-components"
import GlobalStyle from './GlobalStyle';

const StContatiner = styled.div`
  display: flex;
`;

const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props)=> props.borderColor};
  margin: 20px;
  /* background-color: ${(props) => {
    return props.backgroundColor;
  }}; */
`;

// 박스의 색
const boxList = ['red', 'blue', 'green', 'lavender'];

//  색을 넣으면 이름을 변환
const getBoxName = (color) => {
  switch (color) {
    case 'red':
      return "빨간 박스";
    case 'green':
      return "초록 박스";
    case 'blue':
      return "파란 박스";
    default:
      return "검정 박스";
  }
}

function App() {
  return (
    <>
    <GlobalStyle />
      <StContatiner>
        {/* <StBox borderColor="red">red box</StBox> */}
        {/* <StBox borderColor="blue">blue box</StBox> */}
        {/* <StBox borderColor="green">green box</StBox> */}
        {
          boxList.map((box) => {
            return <StBox borderColor={box}>{getBoxName(box)}</StBox>;

          })
        }
      </StContatiner>
    </>
  );
} 

export default App;
