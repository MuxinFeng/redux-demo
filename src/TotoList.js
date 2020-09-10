import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input , Button , List } from 'antd'
import store from './store/index'

// const data=[
//     '早8点开晨会，分配今天的开发工作',
//     '早9点和项目经理作开发需求讨论会',
//     '晚5:30对今日代码进行review'
// ]

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state=store.getState();
        this.changeInputValue= this.changeInputValue.bind(this)
        //----------关键代码-----------start
        this.storeChange = this.storeChange.bind(this)  //转变this指向
        store.subscribe(this.storeChange) //订阅Redux的状态
        //----------关键代码-----------end
    }

    changeInputValue = (e)=>{
        console.log(e.target.value)
        const action = {
            type:'changeInputValue',
            value:e.target.value
        }
        store.dispatch(action)
    }

    storeChange = ()=>{
        this.setState(store.getState())
    }

    deleteItem =(index)=>{
        console.log(index)
        const action = {
            type:'deleteItem',
            value:index
        }
        store.dispatch(action)
    }

    addItem = ()=>{
        const action = {
            type:'addItem',
            value:'加一条'
        }
        store.dispatch(action)
    }

    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input placeholder={this.state.inputValue} style={{ width:'250px', marginRight:'10px'}} onChange={this.changeInputValue}/>
                    <Button onClick={this.addItem()} type="primary">增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item,index)=>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)}
                    />    
                </div>
            </div>
         );
    }
}
export default TodoList;