import React, { Component } from 'react';
import "./app.css";
import Habitsy from './Components/habitsy';
import Navbar from './Components/navbar';

class App extends Component {
  state = {
    habits: [
        { id: 1, name: 'Reading', count: 0 },
        { id: 2, name: 'Running', count: 0 },
        { id: 3, name: 'Coding', count: 0 },
    ],
};

  handleIncrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1}; // habit에 purecomponent를 쓸 경우 count가 업데이트되지 않았음. 이유는 shallowComparison때문. 해결하기 위한 방법으로 데이터를 전부 다시 만들어주는 방식을 택함
      }
      return item;
    })
    this.setState({ habits });
  }

  handleDecrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id) {
        return { ...habit, count: habit.count > 0 ? habit.count - 1 : 0};
      }
      return item;
    });
    this.setState({ habits });
  }

  handleDelete = (habit) => {
    const habits = this.state.habits.filter(item => {
      if (item.id !== habit.id) {
        return { ... habit }
      }});
    this.setState({ habits });
  }

  handleAdd = name => {
    const habits = [...this.state.habits, { id: Date.now(), name: name, count: 0 }];
    this.setState({ habits});
  }

  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if(habit.count !== 0) {
        return { ...habit, count : 0 }
      }
      return habit;
    });
    this.setState({ habits });
  }

  render() {
    return ( <>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
            <Habitsy habits={this.state.habits}
            onIncrement={this.handleIncrement} 
            onDecrement={this.handleDecrement} 
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
            onReset={this.handleReset} />
      </>);
    }
}

export default App;
