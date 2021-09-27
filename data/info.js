import { config } from '../config.js';

const dragonsBaseApiUrl = `${config.baseApiUrl}/info`;

export function getCompanyInfo() {
  return fetch(dragonsBaseApiUrl)
    .then(data => data.json());
}

