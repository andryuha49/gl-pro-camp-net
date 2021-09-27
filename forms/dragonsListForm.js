import {createDomElement} from '../dom-utils/createDomElement.js';
import {getAllDragons} from '../data/dragons.js';

function createTableHeader() {
  const header = createDomElement('tr');
  header.append(
    createDomElement('th', {innerText: 'ID'}),
    createDomElement('th', {innerText: 'NAME'}),
  );
  return header;
}

function createTableRow(dragon) {
  const row = createDomElement('tr', {
    onclick: () => {
      console.log(dragon);
      history.pushState({}, '', `/dragons/${dragon.id}`);
    },
    style: 'cursor: pointer'
  });
  row.append(
    createDomElement('td', {innerText: dragon.id}),
    createDomElement('td', {innerText: dragon.name}),
  );
  return row;
}

function renderDragonsTable(dragons) {
  const table = createDomElement('table');
  table.append(createTableHeader());
  for (let dragon of dragons) {
    table.append(createTableRow(dragon));
  }

  return table;
}

function renderDragonsForm(dragons) {
  const form = createDomElement('div');
  form.append(createDomElement('h3', {innerText: 'Dragons list'}));
  form.append(renderDragonsTable(dragons))
  return form;
}

export function dragonsListForm() {
  return getAllDragons().then((data) => {
    return renderDragonsForm(data);
  });
}