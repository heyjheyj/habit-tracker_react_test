import Presenter from "../Components/habit_presenter";

describe("habit presenter", () => {
  const habits = [
    { id: 1, name: "Reading", count: 3 },
    { id: 2, name: "Running", count: 0 }
  ];
  let presenter;
  let update;

  beforeEach(() => {
    presenter = new Presenter(habits, 3);
    update = jest.fn();
  });

  it("init with habits", () => {
    expect(presenter.getHabits()).toEqual(habits);
  });

  it("increments habit count and call update callback", () => {
    presenter.handleIncrement(habits[0], update);
    expect(presenter.getHabits()[0].count).toBe(4);
    chechUpdateIsCalled();
  });

  it("decrements habit count and call update callback", () => {
    presenter.handleDecrement(habits[0], update);
    expect(presenter.getHabits()[0].count).toBe(2);
    chechUpdateIsCalled();
  });

  it("dose not set the count value below 0 when decrements", () => {
    presenter.handleDecrement(habits[1], update);
    expect(presenter.getHabits()[1].count).toBe(0);
    chechUpdateIsCalled();
  });

  it("deletes habit from the lists", () => {
    presenter.handleDelete(habits[0], update);
    expect(presenter.getHabits().length).toBe(1);
    expect(presenter.getHabits()[0].name).toBe("Running");
    chechUpdateIsCalled();
  });

  it("add habit and call update callback", () => {
    presenter.handleAdd("Coding", update);
    expect(presenter.getHabits()[2].name).toBe("Coding");
    expect(presenter.getHabits()[2].count).toBe(0);
    chechUpdateIsCalled();
  });

  it("throw an error when the max habits limit is exceeded", () => {
    presenter.handleAdd("Coding", update);
    expect(() => presenter.handleAdd("Eating", update)).toThrow(
      `You cannot create a new habit over 3 limit`
    );
  });

  describe("reset", () => {
    it("sets all habit counts to 0", () => {
      presenter.handleReset(update);
      // expect(presenter.getHabits()[0].count).toBe(0);
      expect(presenter.getHabits()[1].count).toBe(0);
      // chechUpdateIsCalled();
    });

    it("dose not create new object when count is 0", () => {
      const habits = presenter.getHabits();
      presenter.handleReset(update);
      const updatedhabits = presenter.getHabits();

      expect(updatedhabits[1]).toBe(habits[1]);
      // tobe는 object의 참조값을 검사하기 때문에 스테이트가 변경되면 error가 발생함
    });
  });

  function chechUpdateIsCalled() {
    expect(update).toHaveBeenCalledTimes(1);
    expect(update).toHaveBeenCalledWith(presenter.getHabits());
  }
});
