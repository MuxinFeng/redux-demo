const defaultState = {
    inputValue : 'Write Something',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
}  //默认数据
export default (state = defaultState,action)=>{  //就是一个方法函数
    if(action.type === 'changeInputValue'){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value;
        return newState
    }else if(action.type === 'deleteItem'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value,1);
        return newState
    }else if(action.type === 'addItem'){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.list.push(action.value);
        return newState
    }else
    return state
}