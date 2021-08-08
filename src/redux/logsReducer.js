import * as actionTypes from "./actionTypes";

const initialLogs = {
  logs: []
}

const logsReducer = (state = initialLogs, action) => {
  switch (action.type) {
    case actionTypes.ADD_NEW_LOG:
      return {
        logs: [...state.logs, action.payload.log]
      }
    
    case actionTypes.REMOVE_LOG:
      return {
        logs: state.logs.filter((log) => log.id !== action.payload.id)
      }
    
    case actionTypes.EDIT_LOG:
      return {
        logs: state.logs.map((log) => 
          log.id === action.payload.id
            ? { ...log, day: action.payload.day, startTime: action.payload.startTime, endTime: action.payload.endTime }
            : log
        )
      }

    default:
      return state;
  }
}

export default logsReducer;
