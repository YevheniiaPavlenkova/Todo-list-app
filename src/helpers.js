import { getId, addTodoItem, editTodoItem, doneTodoItem, deleteTodoItem, getTodoItems, updateTodoItems } from './localStorageInterface';

const GREETINGS = 'You have no tasks yet, so let\'s change it. Press "Add new task" button to add a new task =)';

export const closeModal = (modal) => {
  document.getElementById('modalForm').reset();
  document.getElementById('itemId').innerHTML = '';
  // eslint-disable-next-line no-param-reassign
  modal.style.display = 'none';
};

export const openModal = (modal, todoItem = null) => {
  if (todoItem !== null) {
    document.getElementById('itemId').innerHTML = String(todoItem.id);
    document.getElementById('title').value = todoItem.title;
    document.getElementById('description').value = todoItem.description;
    const prioritySelection = document.getElementById('priority');
    prioritySelection.value = todoItem.priorityNum;
    prioritySelection.options[prioritySelection.selectedIndex].text = todoItem.priorityStr;
    document.getElementById('deadline').value = todoItem.deadline;
  }
  // eslint-disable-next-line no-param-reassign
  modal.style.display = 'block';
};

export const saveTodoItem = () => {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const prioritySelection = document.getElementById('priority');
  const priorityNum = prioritySelection.value;
  const priorityStr = prioritySelection.options[prioritySelection.selectedIndex].text;
  const deadline = document.getElementById('deadline').value;
  const itemId = document.getElementById('itemId').innerHTML;
  document.getElementById('itemId').innerHTML = '';

  const todoItemObj = {
    title,
    description,
    priorityNum,
    priorityStr,
    deadline,
    done: false,
    id: itemId ? Number(itemId) : getId(),
  };

  if (itemId) {
    editTodoItem(todoItemObj);
  } else {
    addTodoItem(todoItemObj);
  }
};

export const showOneTodoItem = (todoItem) => {
  const divForTodoItem = document.createElement('div');
  divForTodoItem.className = todoItem.done ? 'done-todo-item' : 'undone-todo-item';

  const divForTodoItemContent = document.createElement('div');
  divForTodoItemContent.className = 'todo-item-content';

  const divForTodoItemFooter = document.createElement('div');
  divForTodoItemFooter.className = 'todo-item-footer';

  const titleHeading = document.createElement('h2');
  const titleHeadingText = document.createTextNode(`Title: ${todoItem.title}`);
  titleHeading.appendChild(titleHeadingText);
  divForTodoItemContent.appendChild(titleHeading);

  if (todoItem.description) {
    const descriptionParagraph = document.createElement('p');
    const descriptionParagraphText = document.createTextNode(`Description: ${todoItem.description}`);
    descriptionParagraph.appendChild(descriptionParagraphText);
    divForTodoItemContent.appendChild(descriptionParagraph);
  }

  const priorityParagraph = document.createElement('p');
  const priorityParagraphText = document.createTextNode(`Priority: ${todoItem.priorityStr}`);
  priorityParagraph.appendChild(priorityParagraphText);
  divForTodoItemContent.appendChild(priorityParagraph);

  if (todoItem.deadline) {
    const deadlineParagraph = document.createElement('p');
    const deadlineParagraphText = document.createTextNode(`Deadline: ${todoItem.deadline}`);
    deadlineParagraph.appendChild(deadlineParagraphText);
    divForTodoItemContent.appendChild(deadlineParagraph);
  }

  const deleteBtn = document.createElement('button');
  const deleteBtnText = document.createTextNode('Delete');
  deleteBtn.appendChild(deleteBtnText);
  deleteBtn.className = 'todo-item-button';
  deleteBtn.onclick = () => {
    const isItemsListEmpty = deleteTodoItem(todoItem.id);
    divForTodoItem.remove();
    if (isItemsListEmpty) {
      document.getElementById('greetings').innerHTML = GREETINGS;
    }
  };
  divForTodoItemFooter.appendChild(deleteBtn);

  const editBtn = document.createElement('button');
  const editBtnText = document.createTextNode('Edit');
  editBtn.appendChild(editBtnText);
  editBtn.className = 'todo-item-button';
  // eslint-disable-next-line no-undef
  editBtn.onclick = () => openModal(modal, todoItem);
  divForTodoItemFooter.appendChild(editBtn);

  const doneBtn = document.createElement('button');
  const doneBtnText = todoItem.done ? document.createTextNode('Undone') : document.createTextNode('Done');
  doneBtn.appendChild(doneBtnText);
  doneBtn.className = 'todo-item-button';
  doneBtn.title = 'Click this button to change task status';
  doneBtn.onclick = () => {
    doneTodoItem(todoItem.id);
    if (divForTodoItem.className === 'undone-todo-item') {
      divForTodoItem.className = 'done-todo-item';
      doneBtn.innerText = 'Undone';
    } else {
      divForTodoItem.className = 'undone-todo-item';
      doneBtn.innerText = 'Done';
    }
  };
  divForTodoItemFooter.appendChild(doneBtn);

  divForTodoItem.appendChild(divForTodoItemContent);
  divForTodoItem.appendChild(divForTodoItemFooter);

  document.getElementById('todoListContent').appendChild(divForTodoItem);
};

export const showAllTodoItems = () => {
  const itemsList = getTodoItems();
  if (itemsList.length === 0) {
    document.getElementById('greetings').innerHTML = GREETINGS;
  } else {
    // eslint-disable-next-line no-restricted-syntax
    for (const todoItem of itemsList) {
      showOneTodoItem(todoItem);
    }
  }
};

export const statusSortion = (itemsList) => itemsList.sort((a, b) => {
  if (a.done > b.done) {
    return 1;
  }
  if (a.done < b.done) {
    return -1;
  }
  return 0;
});

export const prioritySortion = (itemsList) => itemsList.sort((a, b) => {
  if ((a.done === b.done) && (a.priorityNum > b.priorityNum)) {
    return -1;
  }
  if ((a.done === b.done) && (a.priorityNum < b.priorityNum)) {
    return 1;
  }
  return 0;
});

export const sortByPriority = () => {
  let itemsList = getTodoItems();

  itemsList = statusSortion(itemsList);

  itemsList = prioritySortion(itemsList);

  updateTodoItems(itemsList);

  document.getElementById('todoListContent').innerHTML = '';
  showAllTodoItems();
};

export const sortByStatus = () => {
  let itemsList = getTodoItems();

  itemsList = statusSortion(itemsList);

  updateTodoItems(itemsList);

  document.getElementById('todoListContent').innerHTML = '';
  showAllTodoItems();
};

export const searchByTitle = () => {
  const searchText = document.getElementById('searchInput').value.toLowerCase();
  document.getElementById('greetings').innerHTML = '';
  if (searchText) {
    const itemsList = getTodoItems();
    const foundItems = itemsList.filter((a) => a.title.toLowerCase().includes(searchText));
    document.getElementById('todoListContent').innerHTML = '';
    if (foundItems.length === 0) {
      document.getElementById('greetings').innerHTML = 'Nothing found';
    } else {
      // eslint-disable-next-line no-restricted-syntax
      for (const todoItem of foundItems) {
        showOneTodoItem(todoItem);
      }
    }
  } else {
    document.getElementById('todoListContent').innerHTML = '';
    showAllTodoItems();
  }
};
