import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState('')

 
  useEffect(()=>{
    console.log(`hello useEffect! : $(value)`);
  
    return () => {
       // clena up
      console.log('나 사라져요!')
    };
  }, [value]);

  // 1.input에 값을 입력
  // 2.value, 즉 state가 변경
  // 3.state가 바뀌었기 떄문에 ->App 컴포넌트가 리렌더링
  // 4.리렌더링 -> useEffect()
  // 5. 1~4번 계속 반복


  return (
    <div>
      <input
        type='text'
        value={value}
        onChange={(event)=>{
          setValue(event.target.value);
        }}
      />
    
    </div>
    
  );
}

export default App;
