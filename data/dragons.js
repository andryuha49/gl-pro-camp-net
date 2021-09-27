import { config } from '../config.js';

const dragonsBaseApiUrl = `${config.baseApiUrl}/dragons`;

export function getAllDragons() {
  return fetch(dragonsBaseApiUrl)
    .then(data => data.json());
}

export function getDragonById(id) {
  const url = `${dragonsBaseApiUrl}/${id}`;
  return fetch(url)
    .then(data => data.json());
}
