import {
  ADD_DATA,
  SUBMIT_DATA,
  FILTER_DATA,
  PRICE_FILTER,
  RANGE_FILTER,
  BIG_FILTER,
  DELETE_DATA,
  UPDATE_RECORD,
} from "../Types/types";

export function addData(payload) {
  console.log(payload);
  return {
    type: ADD_DATA,
    payload,
  };
}

export function submitData(payload) {
  console.log(payload);
  return {
    type: SUBMIT_DATA,
    payload,
  };
}

export function filterData(payload) {
  console.log(payload);
  return {
    type: FILTER_DATA,
    payload,
  };
}

export function priceFilter(payload) {
  console.log(payload);
  return {
    type: PRICE_FILTER,
    payload,
  };
}

export function rangeFilter(payload) {
  console.log(payload);
  return {
    type: RANGE_FILTER,
    payload,
  };
}

export function bigFilter(payload) {
  console.log(payload);
  return {
    type: BIG_FILTER,
    payload,
  };
}

export function deleteData(payload) {
  console.log(payload);
  return {
    type: DELETE_DATA,
    payload,
  };
}

export function updateData(payload) {
  console.log(payload);
  return {
    type: UPDATE_RECORD,
    payload,
  };
}
