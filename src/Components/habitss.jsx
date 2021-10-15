import React from 'react';

const Habitss = ({habit, onIncrement, onDecrement, onDelete}) => {

    const handleIncrement = () => {
        onIncrement(habit);
    }

    const handleDecrement = () => {
        onDecrement(habit);
    } 

    const handleDelete = () => {
        onDelete(habit);
    }

    return (
        <li className="habit">
            <span className="habit-name">{habit.name}</span>
            <span className="habit-count">{habit.count}</span>
            <button className="habit-button habit-increase" onClick={handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
            <button className="habit-button habit-decrease" onClick={handleDecrement}>
                <i className="fas fa-minus-square"></i>
            </button>
            <button className="habit-button habit-delete" onClick={handleDelete}>
                <i className="fas fa-trash"></i>
            </button>
        </li>)
    };

export default Habitss;

// memo쓰는 것은 다음에 적용