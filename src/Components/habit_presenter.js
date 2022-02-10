class HabitPresenter {
  constructor(habits, maxHabits) {
    this.habits = habits;
    this.maxHabits = 3;
  }

  getHabits() {
    return this.habits;
  }

  handleIncrement(habit, update) {
    this.habits = this.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    update(this.habits);
  }

  handleDecrement(habit, update) {
    this.habits = this.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count > 0 ? habit.count - 1 : 0 };
      }
      return item;
    });
    update(this.habits);
  }

  handleDelete(habit, update) {
    this.habits = this.habits.filter((item) => {
      if (item.id !== habit.id) {
        // return { ...habit }
        return true;
      }
      return false;
    });
    update(this.habits);
  }

  handleAdd(name, update) {
    if (this.habits.length === this.maxHabits) {
      throw new Error(
        `You cannot create a new habit over ${this.maxHabits} limit`
      );
    }
    this.habits = [...this.habits, { id: Date.now(), name: name, count: 0 }];
    update(this.habits);
  }

  handleReset(update) {
    this.habit = this.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    update(this.habit);
  }
}

export default HabitPresenter;
