import { ADD_TASK, DELETE_TASK, DONE_TASK } from "../actionsTypes/constants";

const intinalState = {
  list: [],
};

const reducerTask = (state = intinalState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, list: [...state.list, action.payload] };
    case DELETE_TASK:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.id),
      };

    case DONE_TASK:
      return {
        ...state,
        list: state.list.map((el) =>
          el.id === action.payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    default:
      return state;
  }
};

export default reducerTask;
