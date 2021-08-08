import Surface from '../shared/Surface';
import Header from '../shared/Header';
import { StyledLabel, StyledRow } from '../shared/Form';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useState } from 'react';
import { connect } from 'react-redux';
import { addNewLog } from '../../redux/logsActions';

const AddLog = ({addNewLog}) => {

  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleOnClick = () => {
    const clickTime = new Date();
    const uniqueId = clickTime.getTime();
    const log = {
      id: uniqueId,
      day: date,
      startTime: startTime,
      endTime: endTime
    }
    date && startTime && endTime && addNewLog(log);
  }

  return(
    <Surface>
      <Header>Add Log</Header>
      <form>
        <StyledRow>
          <StyledLabel>Select Day</StyledLabel>
          <TextField
            id="date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(event) => setDate(event.target.value)}
          />
        </StyledRow>
        <StyledRow>
          <StyledLabel>Start Time</StyledLabel>
          <TextField
            id="time"
            type="time"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            onChange={(event) => setStartTime(event.target.value)}
          />
        </StyledRow>
        <StyledRow>
          <StyledLabel>End Time</StyledLabel>
          <TextField
            id="time"
            type="time"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            onChange={(event) => setEndTime(event.target.value)}
          />
        </StyledRow>
        <Button variant="contained" color="primary" onClick={handleOnClick}>Add</Button>
      </form>
    </Surface>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewLog: (log) => dispatch(addNewLog(log))
  }
}

export default connect(null, mapDispatchToProps)(AddLog);
