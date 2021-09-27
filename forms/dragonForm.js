import {createDomElement} from '../dom-utils/createDomElement.js';
import {getDragonById} from '../data/dragons.js';

function createFormHeader() {
  const header = createDomElement('div', {style: 'margin-bottom: 10px'});
  const backBtn = createDomElement('button', {
    onclick: () => { history.pushState({}, '', '/dragons') },
    innerText: 'Back to list',
  });
  header.append(backBtn);
  return header;
}

function createFormFooter() {
  const footer = createDomElement('div', {style: 'margin-top: 10px'});
  const saveBtn = createDomElement('button', {
    onclick: () => {
      // do something for saving
      history.pushState({}, '', '/dragons');
    },
    innerText: 'Save',
  });
  footer.append(saveBtn);
  return footer;
}

function createFormField(label, value) {
  const field = createDomElement('div');
  field.append(
    createDomElement('label', {innerText: label, style: 'margin-right: 10px'}),
    createDomElement('input', {value}),
  );
  return field;
}

function renderDragonForm(dragon) {
  const form = createDomElement('form');
  form.append(createDomElement('h3', {innerText: 'Dragon'}));
  form.append(createFormHeader());
  for (let key in dragon) {
    const value = dragon[key];
    if (typeof value === 'string' || typeof value === 'number') {
      form.append(createFormField(key, value));
    }
  }
  form.append(createFormFooter());

  return form;
}

function getDragonIdFromUrl(url) {
  return url.replace('/dragons/', '');
}

export async function dragonForm() {
  const dragonId = getDragonIdFromUrl(document.location.pathname);
  if (dragonId) {
    const dragon = await getDragonById(dragonId)
    return renderDragonForm(dragon);
  }
}