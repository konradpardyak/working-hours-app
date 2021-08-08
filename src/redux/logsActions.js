import * as actionTypes from "./actionTypes";

export const addNewLog = (log) => {
  return {
    type: actionTypes.ADD_NEW_LOG,
    payload: {
      log: log
    }
  }
}

export const removeLog = (id) => {
  return {
    type: actionTypes.REMOVE_LOG,
    payload: {
      id: id
    }
  }
}

export const editLog = (id, day, startTime, endTime) => {
  return {
    type: actionTypes.EDIT_LOG,
    payload: {
      id: id,
      day,
      startTime,
      endTime
    }
  }
}
