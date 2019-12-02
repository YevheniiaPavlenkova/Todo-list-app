export const getTodoItems = () => JSON.parse(localStorage.getItem('todoList'));

export const updateTodoItems = (items) => localStorage.setItem('todoList', JSON.stringify(items));

export const addTodoItem = (item) => {
  const itemsList = getTodoItems();
  const newItemsList = [item, ...itemsList];
  updateTodoItems(newItemsList);
};

export const editTodoItem = (item) => {
  const itemsList = getTodoItems();
  const newItemsList = itemsList.map((element) => {
    if (element.id === item.id) {
      return {
        ...element,
        title: item.title,
        description: item.description,
        priorityNum: item.priorityNum,
        priorityStr: item.priorityStr,
        deadline: item.deadline,
      };
    }
    return element;
  });
  updateTodoItems(newItemsList);
};

export const deleteTodoItem = (id) => {
  const itemsList = getTodoItems();
  const newItemsList = itemsList.filter((item) => item.id !== id);
  let isNewItemsListEmpty = false;
  updateTodoItems(newItemsList);
  if (newItemsList.length === 0) {
    isNewItemsListEmpty = true;
  }
  return isNewItemsListEmpty;
};

export const doneTodoItem = (id) => {
  const itemsList = getTodoItems();
  const newItemsList = itemsList.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        done: !item.done,
      };
    }
    return item;
  });
  updateTodoItems(newItemsList);
};

export const getId = () => {
  let lastId = JSON.parse(localStorage.getItem('lastId'));
  lastId += 1;
  localStorage.setItem('lastId', lastId);
  return lastId;
};