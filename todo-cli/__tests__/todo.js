const todoList = require("../todo");
const { add, markAsComplete, overdue, dueToday, dueLater } = todoList();
var d = new Date();
const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};
var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);
describe("TodoList Test Suite", () => {
  beforeAll(() => {
    add({
      title: "Task Todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });
  test("add new todo", () => {
    const todoItemsCount = all.length;
    add({
      title: "Submit assignment",
      dueDate: yesterday,
      completed: false,
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });

  test("mark as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("overdue", () => {
    expect(overdue().length).toBe(1);
  });
  test("dueToday", () => {
    add({ title: "Pay many", dueDate: today, completed: true });
    expect(dueToday().length).toBe(1);
  });
  test("dueLater data", () => {
    add({ title: "goto school", dueDate: tomorrow, completed: false });
    add({ title: "pay bill", dueDate: tomorrow, completed: false });
    expect(dueLater().length).toBe(2);
  });
});
