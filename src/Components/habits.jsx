import React, { Component } from 'react';
import Habitss from './habitss';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
    handleIncrement = habit => {
        this.props.onIncrement(habit);
    }

    handleDecrement = habit => {
        this.props.onDecrement(habit);
    }

    handleDelete = habit => {
        this.props.onDelete(habit);
    }

    handleAdd = name => {
        this.props.onAdd(name)
    }

    render() {
        return (
            <>
            <HabitAddForm onAdd={this.handleAdd} />
            <ul>
                {this.props.habits.map(habit => (
                    <Habitss key={habit.id} habit={habit} 
                    onIncrement={this.handleIncrement} 
                    onDecrement={this.handleDecrement} 
                    onDelete={this.handleDelete}/>))
                }
            </ul>
            <section className="reset">
        <button className="resetButton" onClick={this.props.onReset}>Reset All</button>
        </section>
            </>
        );
    }
}

export default Habits;

// list and key 공식 문서 읽어보기
// state를 직접적으로 수정하는 것은 좋지 않음