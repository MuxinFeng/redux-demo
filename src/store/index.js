import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

// import { createStore } from 'redux'  //  引入createStore方法
// import reducer from './reducer'    
// const store = createStore(reducer) // 创建数据存储仓库
// export default store   //暴露出去