import { useCallback, useState } from 'react';
import './App.css';
import Box1 from './components/Box1.jsx';
import Box2 from './components/Box2';
import Box3 from './components/Box3';



function App() {
  console.log('App 컴포넌트가 랜더링되었습니다.');
  const [count, setCount] = useState(0);
  
  //  1 증가
  const onPlusButtonClickHandler = () => {
    setCount(count + 1);
  };
  //  1 감소
  const onMinusButtonClickHandler = () => {
    setCount(count - 1);
  };

  //  count를 초기화해주는 함수, 저기 initCount를 Box1에 props로 내려줘야한다.
  //  바뀐게 있나?
  const initCount = useCallback(() => {
    console.log(`${count}에서 0으로 변경되었습니다.`); //Dependency array에 count 안 넣으면 0이 찍힌다. 초기값이 0이니까.
    setCount(0);
  }, [count]);

  return (
    <>
      <h3>카운트 예제입니다.</h3>
      <p>현재 카운트 : {count}</p>
      <button onClick={onPlusButtonClickHandler}>+</button>
      <button onClick={onMinusButtonClickHandler}>-</button>
      <div style={{
        display: "flex",
        marginTop: "10px",
      }}> 
        <Box1 initCount={initCount}/>
        <Box2 />
        <Box3 />
      </div>
    </>
  );
}

export default App;