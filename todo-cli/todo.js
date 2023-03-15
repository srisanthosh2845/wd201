/* eslint-disable no-undef */

const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  function due(dueDate) {
    const displayformay = new Date().toISOString().split("T")[0];
    return dueDate == displayformay;
  }

  const overdue = () => {
    return all.filter(
      (item) => item.dueDate < new Date().toISOString().split("T")[0]
    );
  };

  const dueToday = () => {
    return all.filter(
      (item) => item.dueDate === new Date().toISOString().split("T")[0]
    );
  };

  const dueLater = () => {
    return all.filter(
      (item) => item.dueDate > new Date().toISOString().split("T")[0]
    );
  };

  const toDisplayableList = (list) => {
    return list.map((item) => toString(item)).join("\n");
  };

  function toString(all) {
    const dueDate = due(all.dueDate) ? "" : all.dueDate;
    const crtstatus = all.completed ? "[x]" : "[ ]";
    return `${crtstatus} ${all.title} ${dueDate}`;
  }

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
