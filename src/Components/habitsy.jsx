import React from 'react';
import Habitss from './habitss';
import HabitAddForm from './habitAddForm';


const Habitsy = ({habits, onIncrement, onDecrement, onDelete, onAdd, onReset}) => {
    return (            
        <>
            <HabitAddForm onAdd={onAdd} />
            <ul>
                {
                habits.map(habit => (
                    <Habitss key={habit.id} habit={habit} 
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

export default Habitsy;