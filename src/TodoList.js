import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '123',
      list: []
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
          <button>提交</button>
        </div>
        <ul>
          <li>设备</li>
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
}

export default TodoList;
