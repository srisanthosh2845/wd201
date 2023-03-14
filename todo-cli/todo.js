const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    const ODUE = all.filter(
      (item) => item.dueDate.split("-")[2] < new Date().getDate()
    );
    return ODUE;
  };

  const dueToday = () => {
    const DTODAY = all.filter(
      (item) => item.dueDate.split("-")[2] === String(new Date().getDate())
    );
    return DTODAY;
  };

  const dueLater = () => {
    const DLATE = all.filter(
      (item) => item.dueDate.split("-")[2] > new Date().getDate()
    );
    return DLATE;
  };

  const toDisplayableList = (list) => {
    const final_result = list.map(
      (item) =>
        `${item.completed ? "[x]" : "[ ]"} ${item.title} ${
          item.dueDate.split("-")[2] === String(new Date().getDate())
            ? ""
            : item.dueDate
        }`
    );

    return final_result.join("\n");
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
