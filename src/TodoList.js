import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '123',
      list: ['item1','item2']
    }
  }
  render() {
    return (
      <div>
        <div>
          <input 
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
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
        </ul>
      </div>

    );
  }
  handleInputChange = (e) => {
    console.log(e.target.value)
    this.setState({
      inputValue: e.target.value
    })
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
