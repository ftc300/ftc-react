import React from "react";
import { DatePicker } from 'antd';
export default class Welcome extends React.Component {
    render() {
        const todoList = ['learn react', 'learn redux', 'learn java'];
        const isLogin = false;
        const h = (<div>
            <h1> Hello </h1>
            {
                todoList.map(item => {
                        return <li> {item} </li>
                    }
                )
            }
            {'isLogin:' + (isLogin ? "true" : 'false')}
            <form>
                <label id="myLabel" htmlFor="male">Male</label>
                <input type="radio" name="sex" id="male" value="male"/>
            </form>
            <DatePicker/>
        </div>);
        console.log(h);
        return h;
    }
}