import React, { useState } from 'react';
import "./app.css";
import Habits from './Components/habits';
import Navbar from './Components/navbar';

const App = () => {
    const [habits, setHabits] = useState([
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ]);

    const handleIncrement = (habit) => {
        setHabits(habits => habits.map(item => {
            if(item.id === habit.id) {
                return { ...habit, count: habit.count + 1};
            }
            return item;
        })
    )};

    const handleDecrement = (habit) => {
        setHabits(habits => habits.map(item => {
            if(item.id === habit.id) {
                return { ...habit, count: habit.count > 0 ? habit.count - 1 : 0};
            }
            return item; 
        })
    )};

    const handleDelete = (habit) => {
        setHabits(habits => habits.filter(item => {
            if (item.id !== habit.id) {
                // return { ...habit }
                return true
            }
            return false
        })
    )}

  const handleAdd = (name) => {
    setHabits(habits => [...habits, { id: Date.now(), name: name, count: 0 } ]);
  };

  const handleReset = () => {
        setHabits(habits => habits.map(habit => {
            if(habit.count !== 0) {
                return { ...habit, count : 0 }
            }
            return habit;
        })
      )
  }

    return (<>
        <Navbar totalCount={habits.filter(item => item.count > 0).length} />
            <Habits habits={habits}
            onIncrement={handleIncrement} 
            onDecrement={handleDecrement} 
            onDelete={handleDelete}
            onAdd={handleAdd}
            onReset={handleReset} />
      </>
      );
    };

export default App;


// Component 방식

// class App extends Component {
//     state = {
//       habits: [
//           { id: 1, name: 'Reading', count: 0 },
//           { id: 2, name: 'Running', count: 0 },
//           { id: 3, name: 'Coding', count: 0 },
//       ],
//   };
  
//     handleIncrement = (habit) => {
//       const habits = this.state.habits.map(item => {
//         if (item.id === habit.id) {
//           return { ...habit, count: habit.count + 1};
//         }
//         return item;
//       })
//       this.setState({ habits });
//     }
  
//     handleDecrement = (habit) => {
//       const habits = this.state.habits.map(item => {
//         if(item.id === habit.id) {
//           return { ...habit, count: habit.count > 0 ? habit.count - 1 : 0};
//         }
//         return item;
//       });
//       this.setState({ habits });
//     }
  
//     handleDelete = (habit) => {
//       const habits = this.state.habits.filter(item => {
//         if (item.id !== habit.id) {
//           return { ... habit }
//         }});
//       this.setState({ habits });
//     }
  
//     handleAdd = name => {
//       const habits = [...this.state.habits, { id: Date.now(), name: name, count: 0 }];
//       this.setState({ habits});
//     }
  
//     handleReset = () => {
//       const habits = this.state.habits.map(habit => {
//         if(habit.count !== 0) {
//           return { ...habit, count : 0 }
//         }
//         return habit;
//       });
//       this.setState({ habits });
//     }
  
//     render() {
//       return ( <>
//           <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
//               <Habitsy habits={this.state.habits}
//               onIncrement={this.handleIncrement} 
//               onDecrement={this.handleDecrement} 
//               onDelete={this.handleDelete}
//               onAdd={this.handleAdd}
//               onReset={this.handleReset} />
//         </>);
//       }
//   }
  
//   export default App;