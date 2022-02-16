import Habits from "../Components/habits";
import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";

describe("habits component", () => {
  const habits = [
    {
      name: "Reading",
      count: 4,
      id: 1
    },
    {
      name: "Eating",
      count: 5,
      id: 2
    }
  ];
  let HabitsComponent;
  let onIncrement;
  let onDecrement;
  let onDelete;
  let onAdd;
  let onReset;

  beforeEach(() => {
    onIncrement = jest.fn();
    onDecrement = jest.fn();
    onDelete = jest.fn();
    onAdd = jest.fn();
    onReset = jest.fn();
    HabitsComponent = (
      <Habits
        habits={habits}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
        onAdd={onAdd}
        onReset={onReset}
      />
    );
  });

  it("renders", () => {
    const component = renderer.create(HabitsComponent);
    expect(component.toJSON()).toMatchSnapshot();
  });

  //   describe("button click", () => {
  //     beforeEach(() => {
  //       render(HabitsComponent);
  //     });

  // it('calls onAdd when Clicking the "Add" button', () => {
  //   const input = screen.getByPlaceholderText("Habit");
  //   const button = screen.getByText("등록");
  //   const newHabit = "New Habit";
  //   userEvent.type(input, newHabit);
  //   userEvent.click(button);
  //   expect(onAdd).toHaveBeenCalledWith(newHabit);
  // });

  // it('calls onIncrement when clicking the "increase" button', () => {
  //   const button = screen.getAllByTitle("increase")[0];
  //   userEvent.click(button);
  //   expect(onIncrement).toHaveBeenCalledWith(habits[0]);
  // });
  //   });
});
