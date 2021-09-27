export function createDomElement(tagName, params) {
  const element = document.createElement(tagName);
  if (params) {
    for (let paramName in params) {
      element[paramName] = params[paramName]
    }
  }
  return element;
}