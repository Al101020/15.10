import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD } from './actionTypes';
// import { ADD_SERVICE, REMOVE_SERVICE } from './actionTypes';

export function addService(name, price) {
  return {type: ADD_SERVICE, payload: {name, price}};
}

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}

export function changeServiceField(name, value) {
  // console.log(name);
  // console.log(price);
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}};
}

// и т.д. для других actionTypes
