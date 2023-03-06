//state의 그룹!

//초기 상태값(state)
const initialState = {
    number: 0,
};
// const [number, setNumber] = useState(0) 을 바꾼게 위에 것.


//리듀서 : 'state의 변화를 일으키는' 함수(인자를 받고 어떠한 역할을 수행하는 함수)
// (1) state를 action의 type에 따라 변경하는 함수

// 이 인자에는 (input값에는) 2가지를 받는다.
// input : state와 action (이렇게 정한 이유는 Redux에서 정한것..)
// action이 인자형태로 들어올 때 객체형태로 되어있고 action의 type과 value를 가지고 있다.
// action은 이 state를 어떻게 (수정) 할 건지, +할건지, -할건지 action에 대해 표현하는게 이 action객체이다.
const counter = (state = initialState, action) => {
    switch (action.type) {
//action에 들어있는 type에따라서 어떠한 작업들을 수행할 것. 아무것도 안 할거라 default만 넣어준다.
        default:
            return state;
    }
}

export default counter;