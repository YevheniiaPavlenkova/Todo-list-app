import './styles.scss';
import { closeModal, openModal, saveTodoItem, showAllTodoItems, sortByPriority, sortByStatus, searchByTitle } from './helpers';

const modal = document.getElementById('modal');
const addTaskBtn = document.getElementById('addTaskBtn');
const closeSign = document.getElementById('closeSign');
const cancelBtn = document.getElementById('cancel');
const modalForm = document.getElementById('modalForm');
const sortByPriorityBtn = document.getElementById('sortByPriorityBtn');
const sortByStatusBtn = document.getElementById('sortByStatusBtn');
const searchByTitleBtn = document.getElementById('searchByTitleBtn');

if (!localStorage.getItem('todoList')) {
  localStorage.setItem('todoList', JSON.stringify([]));
}

if (!localStorage.getItem('lastId')) {
  localStorage.setItem('lastId', JSON.stringify(0));
}

addTaskBtn.onclick = () => openModal(modal);

closeSign.onclick = () => closeModal(modal);
cancelBtn.onclick = () => closeModal(modal);
window.onclick = (event) => {
  if (event.target === modal) {
    closeModal(modal);
  }
};

modalForm.onsubmit = () => saveTodoItem();

sortByPriorityBtn.onclick = () => sortByPriority();

sortByStatusBtn.onclick = () => sortByStatus();

searchByTitleBtn.onclick = () => searchByTitle();

showAllTodoItems();