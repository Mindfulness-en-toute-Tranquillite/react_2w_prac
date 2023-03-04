import './App.css';
import { useState } from 'react';

function App() {
  
  const [number, setNumber] = useState(0);

  return (
    <>
      <div>Number State : {number}</div>
      <button 
        onClick={()=>{
          // 기존 업데이트 방법
          // setNumber(number + 1);

          // 함수형 업데이트 (두가지는 차이가 있다.)
          //setNumber((현재스테이트가 들어가고)=>{값을 변경하는 코드를 작성한다.})
          setNumber((currentNumber)=>{
            return currentNumber + 1;
          });
        }}
      >      
        누르면 UP
        </button>
    </>
  );
}

export default App;
