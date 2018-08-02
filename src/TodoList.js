import React, { Component } from 'react'
import TodoItem from './TodoItem'
import Test from './Test'
import './style.css'
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '123',
      list: ['item1','item2']
    }
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleDeleate = this.handleDeleate.bind(this)
  }
  render() {
    return (
      <div>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <Test content={this.state.inputValue} />
        <ul>
<<<<<<< HEAD
<<<<<<< HEAD
          {this.getTodoItem()}
=======
=======
>>>>>>> bef6650d5d49ed853278a10539bba0faaffb28be
          {
            this.state.list.map((item, index) => {
              return(
                <li 
                  key={index} 
                  onClick={this.handleDeleate.bind(this,index)}
                >{item}</li>
              ) 
            })
            
          }
<<<<<<< HEAD
>>>>>>> bef6650d5d49ed853278a10539bba0faaffb28be
=======
>>>>>>> bef6650d5d49ed853278a10539bba0faaffb28be
        </ul>
      </div>

    );
  }
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return(
          <TodoItem
            key={index}
            content={item}
            index={index}
            deleteItem={this.handleDeleate}
            />
      )
    })
  }
<<<<<<< HEAD
  handleInputChange(e) {
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }
  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }
  handleDeleate (index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState(() => ({
      list
    }))
=======
  handleBtnClick = () => {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleDeleate (index) {
    console.log(index)
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
>>>>>>> bef6650d5d49ed853278a10539bba0faaffb28be
  }
  handleBtnClick = () => {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleDeleate (index) {
    console.log(index)
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default TodoList;
