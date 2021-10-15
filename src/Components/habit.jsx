import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    
    handleIncrement = event => {
        this.props.onIncrement(this.props.habit);
    }

    handleDecrement = event => {
        this.props.onDecrement(this.props.habit);
    } 

    handleDelete = event => {
        this.props.onDelete(this.props.habit);
    }

    render() {
        console.log(this.props.habit);
        const { name, count } = this.props.habit;

        return (<li className="habit">
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
            <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                <i className="fas fa-minus-square"></i>
            </button>
            <button className="habit-button habit-delete" onClick={this.handleDelete}>
                <i className="fas fa-trash"></i>
            </button>
        </li>)
    }
}


export default Habit;


// PropTypes 종류
// https://ko.reactjs.org/docs/typechecking-with-proptypes.html