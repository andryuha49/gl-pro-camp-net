
export async function render(containerId, renderFunction) {
  const element = document.getElementById(containerId);
  if (element) {
    element.innerHTML = '';
    element.append(await renderFunction());
  }
}