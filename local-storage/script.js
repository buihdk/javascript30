'use strict';

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const btnCheck = document.getElementById('check'); // faster than querySelector
const btnUncheck = document.getElementById('uncheck');
const btnClear = document.getElementById('clear');

let items = JSON.parse(localStorage.getItem('items')) || [];

const populateListInHTML = (plates = [], platesList) => {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
        <label for="item${i}">${plate.text}</label>
        <a id="${i}" onclick="deleteItem()"></a>
      </li>
    `;
  }).join('');
};

const populateListAndSetLocalStorage = (arr, htmlElement) => {
  populateListInHTML(arr, htmlElement);
  localStorage.setItem('items', JSON.stringify(arr));
}

const addItem = (e) => {
  e.preventDefault();
  const text = (e.target.querySelector('[name=item]')).value;
  const item = { text, done: false };
  items.push(item);
  populateListAndSetLocalStorage(items, itemsList);
  e.target.reset();
};

const toggleCheck = (e) => {
  if (!e.target.matches('input')) return; // skip this unless it's an input
  const index = e.target.dataset.index;
  items[index].done = !items[index].done;
  populateListAndSetLocalStorage(items, itemsList);
};

const deleteItem = (e) => {
  items.splice(e.target.id, 1);
  populateListAndSetLocalStorage(items, itemsList);
}

const toggleCheckAll = (checked = false) => {
  items.map(item => item.done = checked);
  populateListAndSetLocalStorage(items, itemsList);
};

const clearAll = () => {
  items = [];
  populateListAndSetLocalStorage(items, itemsList);
};

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleCheck); // event delegation
btnCheck.addEventListener('click', () => toggleCheckAll(true));
btnUncheck.addEventListener('click', () => toggleCheckAll(false));
btnClear.addEventListener('click', clearAll);

populateListInHTML(items, itemsList);