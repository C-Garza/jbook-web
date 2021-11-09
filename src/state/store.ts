import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { ActionType } from "./action-types";
import { defaultCells } from "../data/defaultCells";

export const store = createStore(reducers, {}, applyMiddleware(thunk));

defaultCells.reverse().map(cell => {
  return store.dispatch({
    type: ActionType.INSERT_CELL_AFTER,
    payload: {
      id: null,
      type: cell.type,
      content: cell.content
    }
  });
});