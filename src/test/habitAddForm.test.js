import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import HabitAddForm from "../Components/habitAddForm";

describe("habitAddForm", () => {
  let input;
  let button;
  let onAdd;
  beforeEach(() => {
    onAdd = jest.fn();
    render(<HabitAddForm onAdd={onAdd} />);
    input = screen.getByPlaceholderText("취미를 입력해주세요");
    button = screen.getByText("등록");
  });

  it("calls onAdd when button is clicked", () => {
    userEvent.type(input, "new habit");
    userEvent.click(button);

    expect(onAdd).toHaveBeenCalledWith("new habit");
  });

  it("dose not call onAdd when the habit is empty", () => {
    userEvent.type(input, "");
    userEvent.click(button);

    expect(onAdd).toHaveBeenCalledTimes(0);
  });
});
