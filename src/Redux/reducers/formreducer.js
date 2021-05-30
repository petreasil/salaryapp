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
import { sortAsc } from "../../Utils/utils";

const initialState = {
  data: [],
  message: "",
  displayData: [],
  defaultValue: "",
};

export function formReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case SUBMIT_DATA:
      return {
        ...state,
        data: [action.payload, ...state.data],
        message: "Record Submited",
        displayData: [action.payload, ...state.data],
      };
    case FILTER_DATA:
      let sortedArr = [];
      if (action.payload.value === "") {
        sortedArr = state.data;
        return {
          ...state,
          displayData: [...sortedArr],
        };
      }
      if (action.payload.value === "nume") {
        sortedArr = sortAsc(state.displayData, "nume");
        return {
          ...state,
          displayData: [...sortedArr],
        };
      }
      if (action.payload.value === "salariu") {
        sortedArr = sortAsc(state.displayData, "salariu");
        return {
          ...state,
          displayData: [...sortedArr],
        };
      }
      return {
        ...state,
        displayData: [...sortedArr],
      };
    case PRICE_FILTER:
      let filterArr = [];
      if (action.payload.value && action.payload.value2 === "<2500") {
        filterArr = state.data;
        return {
          ...state,
          displayData: [...filterArr.filter((item) => item.salariu < 2500)],
        };
      }

      if (!action.payload.value) {
        filterArr = state.data;
        return {
          ...state,
          displayData: [...filterArr],
        };
      }
      return {
        ...state,
        displayData: [...filterArr],
      };
    case RANGE_FILTER:
      let filterArr2 = [];
      if (
        action.payload.value === true &&
        action.payload.value2 === "2500 si 4000"
      ) {
        filterArr2 = state.data;
        return {
          ...state,
          displayData: [
            ...filterArr2.filter(
              (item) => item.salariu >= 2500 && item.salariu <= 4000
            ),
          ],
        };
      }
      if (action.payload.value === false) {
        filterArr2 = state.data;
        return {
          ...state,
          displayData: [...filterArr2],
        };
      }
      return {
        ...state,
        displayData: [...filterArr2],
      };
    case BIG_FILTER:
      let filterArr3 = [];
      if (action.payload.value === true && action.payload.value2 === ">4000") {
        filterArr3 = state.data;
        return {
          ...state,
          displayData: [...filterArr3.filter((item) => item.salariu > 4000)],
        };
      }

      if (action.payload.value === false) {
        filterArr3 = state.data;
        return {
          ...state,
          displayData: [...filterArr3],
        };
      }
      return {
        ...state,
        displayData: [...filterArr3],
      };
    case DELETE_DATA:
      return {
        ...state,
        displayData: [
          ...state.displayData.filter((item) => item.id !== action.payload.id),
        ],
        data: [...state.data.filter((item) => item.id !== action.payload.id)],
      };
    case UPDATE_RECORD:
      return {
        ...state,
        data: state.data.map((record) =>
          record.id === action.payload.id ? (record = action.payload) : record
        ),
        message: "Record Updated",
        displayData: state.displayData.map((record) =>
          record.id === action.payload.id ? (record = action.payload) : record
        ),
      };
    default:
      return state;
  }
}
