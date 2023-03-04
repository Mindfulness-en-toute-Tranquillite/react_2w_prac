import React, { useEffect, useRef, useState } from 'react'

function App() {

  const idRef = useRef('');
  const pwRef = useRef('');  
  const [id, setId] = useState('');

  useEffect(() => {
    idRef.current.focus();
  }, []);

  useEffect(()=>{
    if(id.length >= 10 ) {
      pwRef.current.focus();
    }
  }, [id])
// useEffect 이 부분이 발동되야 할 때는 id라는 state가 계속해서 바뀔때.
// id라는 state가 바뀔 때 마다 useEffect가 실행이 되어야 하니까 의존배열에 id가 들어간다.




  return (
  <div>
    아이디 : <input type='text' ref={idRef}
    value={id}
    onChange={(event)=>{
      setId(event.target.value)

      // 리액트에서 state는 batch 업데이트. Id가 10자리가 되었다 하더라도 바로 반영x.
      //  그래서 아래 로직 맞긴 하지만 id에 11자리 넣었을 때 아래로 움직인다. 하나씩 늦는다.
      // setId(event.target.value) 이런거 콘솔 찍어보면 하나씩 늦게 찍힘.
        if (id.length >= 10) {
          pwRef.current.focus();
        }
    }}
    />
    <br />
    비밀번호 : <input type='password' ref={pwRef}/>
  </div>
  );
}

export default App