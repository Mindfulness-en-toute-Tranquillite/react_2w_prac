import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/config/configStore';
//export default로 빼줬으면 { store } 하면 안 된다.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Provider로 App을 감싸준다. App이라는 컴포넌트가 Provider의 지배권 안으로 들어가는 것.
  //provider는 store를 기반으로 지배권을 행사. App컴포넌트 이하에서는 store사용 준비가 되었다.
  <Provider store={store}>
    <App />
  </Provider>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
