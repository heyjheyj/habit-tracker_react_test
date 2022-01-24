import React from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

const Habits = ({habits, onIncrement, onDecrement, onDelete, onAdd, onReset}) => {
    return (            
        <>
            <HabitAddForm onAdd={onAdd} />
            <ul>
                {
                habits.map(habit => (
                    <Habit key={habit.id} habit={habit} 
                    onIncrement={onIncrement} 
                    onDecrement={onDecrement} 
                    onDelete={onDelete}/>))
                }
            </ul>
            <section className="reset">
                <button className="resetButton" onClick={onReset}>Reset All</button>
            </section>
        </>
    );
};

export default Habits;


// Component방식

// class Habits extends Component {
//     handleIncrement = habit => {
//         this.props.onIncrement(habit);
//     }

//     handleDecrement = habit => {
//         this.props.onDecrement(habit);
//     }

//     handleDelete = habit => {
//         this.props.onDelete(habit);
//     }

//     handleAdd = name => {
//         this.props.onAdd(name)
//     }

//     render() {
//         return (
//             <>
//             <HabitAddForm onAdd={this.handleAdd} />
//             <ul>
//                 {this.props.habits.map(habit => (
//                     <Habits key={habit.id} habit={habit} 
//                     onIncrement={this.handleIncrement} 
//                     onDecrement={this.handleDecrement} 
//                     onDelete={this.handleDelete}/>))
//                 }
//             </ul>
//             <section className="reset">
//         <button className="resetButton" onClick={this.props.onReset}>Reset All</button>
//         </section>
//             </>
//         );
//     }
// }

// export default Habits;