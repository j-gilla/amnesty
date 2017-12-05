
let ROOT_URL = 'http://localhost:8080/api';

export function url(endpoint) {
  let fill = endpoint.indexOf('/') == 0 ? '' : '/';
  return `${ROOT_URL}${fill}${endpoint}`;
}