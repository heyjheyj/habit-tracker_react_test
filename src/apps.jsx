import React, { useState } from 'react';
import "./app.css";
import Habitsy from './Components/habitsy';
import Navbar from './Components/navbar';

const Apps = () => {
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
            <Habitsy habits={habits}
            onIncrement={handleIncrement} 
            onDecrement={handleDecrement} 
            onDelete={handleDelete}
            onAdd={handleAdd}
            onReset={handleReset} />
      </>
      );
    };

export default Apps;