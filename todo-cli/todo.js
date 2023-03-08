const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  function sri(dueDate) {
    const today = new Date().toISOString().split("T")[0];
    return dueDate == today;
  }
  function toString(all) {
    const dueDate = sri(all.dueDate) ? "" : all.dueDate;
    const arch = all.completed ? "[x]" : "[ ]";
    return `${arch} ${all.title} ${dueDate}`;
  }

  const overdue = () => {
    // Write the date check condition here and return the array
    // of overdue items accordingly.
    return all.filter(
      (santhoshtodo) =>
        santhoshtodo.dueDate < new Date().toISOString().split("T")[0]
    );
  };

  const dueToday = () => {
    // of overdue items accordingly.
    return all.filter(
      (santhoshtodo) =>
        santhoshtodo.dueDate === new Date().toISOString().split("T")[0]
    );
    // Write the date check condition here and return the array
    // of todo items that are due today accordingly.
  };

  const dueLater = () => {
    // of overdue items accordingly.
    return all.filter(
      (santhoshtodo) =>
        santhoshtodo.dueDate > new Date().toISOString().split("T")[0]
    );
    // Write the date check condition here and return the array
    // of todo items that are due later accordingly.
  };

  const toDisplayableList = (list) => {
    return list.map((santhoshtodo) => toString(santhoshtodo)).join("\n");
    // Format the To-Do list here, and return the output string
    // as per the format given above.
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};
module.exports = todoList;
