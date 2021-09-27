import {render} from './dom-utils/render.js';
import {dragonsListForm} from './forms/dragonsListForm.js';
import {dragonForm} from './forms/dragonForm.js';

async function renderFormByRoute(url) {
  if (url === '/dragons') {
    await render('root', dragonsListForm);
    return;
  }
  if (url.replace('/dragons', '').length > 0) {
    await render('root', dragonForm);
    return;
  }
  history.pushState({}, '', '/dragons');
}

function configureRouter() {
  const pushState = history.pushState;
  history.pushState = async function(state, title, url) {
    if (typeof history.onpushstate == 'function') {
      history.onpushstate({state: state});
    }
    // maybe call onhashchange e.handler
    const result = pushState.apply(history, arguments);
    // whatever else you want to do
    await renderFormByRoute(url);
    return result;
  };

  window.onpopstate = async function(event) {
    await renderFormByRoute(window.location.pathname);
  };
}

export async function start() {
  configureRouter();

  history.pushState({}, '', '/dragons');
}