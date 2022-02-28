import {
  CREATE_DATA_M,
  DELETE_DATA_M,
  NO_DATA_M,
  READ_ALL_DATA_M,
  READ_DATA_M,
  UPDATE_DATA_M,
} from "../types";

export const createAction = (data) => ({ type: CREATE_DATA_M, payload: data });

export const readAllAction = (data) => ({ type: READ_ALL_DATA_M, payload: data });

export const readAction = (data) => ({ type: READ_DATA_M, payload: data });

export const updateAction = (data) => ({ type: UPDATE_DATA_M, payload: data });

export const deleteAction = (id) => ({ type: DELETE_DATA_M, payload: id });

export const noAction = () => ({ type: NO_DATA_M });
