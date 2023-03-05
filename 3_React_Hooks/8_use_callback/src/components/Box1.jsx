import React from 'react'

const style = {
        width: '100px',
        height: '100px',
        backgroundColor: '#01c49f',
        color: 'white', 
};
//초기화되는 함수는 여기서 관리되는 것이 아니라 App.jsx에
//넣어줄거다. 왜냐하면 App.jsx안에 이 state가 있기 때문에
//setCount를 이용해서 초기화 해주는 로직을 저기에 넣을 거다.
function Box1({initCount}) {
    console.log('Box1 컴포넌트가 랜더링되었습니다.');
    return <div style={style}>
        <button onClick={()=>{
            initCount();
        }}>
            초기화</button>
    </div>;
}

export default React.memo(Box1);