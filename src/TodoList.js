import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

class TodoItem extends React.Component {
    handleDelete(){
        this.props.handleDelete(this.props.index)
        let s = this.props.testMyMethod(1,"we");
        debugger;
        console.log(new Object(s))
    }

    render() {
        return (
            <li onClick={this.handleDelete.bind(this)}>
                {this.props.content}
            </li>
        );
    }

}


export default class TodoList extends React.Component {

    constructor(pros) {
        super(pros);
        this.state = {
            comments: ['this is first comment ', 'this is second comment'],
            inputValue: ""
        }
    }

    render() {
        return (
            <div>
                <div>
                    <input ref={(s) => this.s = s}/>
                    <button onClick={this.onClickSubmit.bind(this)}> add</button>
                </div>
                <div>
                    <ul>
                        {this.state.comments.map((item, index) => <TodoItem testMyMethod={this.testMyMethod.bind(this)} handleDelete={this.handleDelete.bind(this)} key={index} content={item} index={index}/>)}
                        {/*{this.state.comments.map((item, index) => <li key={index}*/} {/*onClick={this.onItemClick.bind(this, index)}>{item}</li>)}*/}
                    </ul>
                </div>
            </div>
        );
    }

    testMyMethod(...arg){
       console.log(...arg)
    }

    handleDelete(index) {
        let comments = [...this.state.comments];
        comments.splice(index, 1);
        this.setState({
            comments
        })
    }


    onClickSubmit() {
        this.setState({
            comments: [...this.state.comments, this.s.value],
        })
        this.s.value = "";
    }


}
