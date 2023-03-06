// 중앙 데이터 관리소(store)를 설정하는 부분
import { createStore } from "redux"; //store를 만드는 API
import { combineReducers } from "redux"; //reducer들을 하나로 묶는 API

//reducer들을 하나로 모아서 한개로 만들어 놓은 기본 reducer
//저기 인자는 변수형태로 들어가고 객체(key:value)를 넣을 거다. 괄호열고 닫으면 함수가 실행된다.
const rootReducer = combineReducers({});
//만든 rooReducer로 store(중앙데이터관리소)만들어 줄 거다.
const store = createStore(rootReducer);
//이 웹애플리케이션 내에서 관리하는 state의 집단들이 다 여기 rootReducer로 들어가게되고
//모든 컴포넌트들은 props로 값을 내려주지 않더라도 중앙데이터관리소로 데이터를 바라볼 수 있게 되는 것이다.

//이렇게 만든 store를 애플리케이션 내부에 주입해주는 과정이 필요. 우선 밖으로 내보내야해.
//index.js파일로 가서 마무리 작업.
export default store;