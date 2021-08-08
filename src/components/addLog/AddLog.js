import Surface from '../shared/Surface';
import Header from '../shared/Header';
import Alert from '../shared/Alert';
import { StyledLabel, StyledRow } from '../shared/Form';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addNewLog } from '../../redux/logsActions';

const AddLog = ({addNewLog}) => {

  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    setDate(defaultDate());
    setStartTime(defaultTime());
    setEndTime(defaultTime());
  }, []);

  const currentTime = new Date();
  const defaultDate = () => {
    const year = currentTime.getFullYear();
    const month = currentTime.getMonth() + 1;
    const day = currentTime.getDate();
    return(
      `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`
    )
  }
  const defaultTime = () => {
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    return(
      `${hour < 10 ? "0" + hour : hour}:${minute < 10 ? "0" + minute : minute}`
    )
  }

  const handleOnClick = () => {
    const clickTime = new Date();
    const uniqueId = clickTime.getTime();
    const log = {
      id: uniqueId,
      day: date,
      startTime: startTime,
      endTime: endTime
    }
    if(new Date(`${date}T${endTime}`).getTime() > new Date(`${date}T${startTime}`).getTime()) {
      setAlert(false);
      addNewLog(log);
    } else {
      setAlert(true);
    }
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
            defaultValue={defaultDate()}
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
            defaultValue={defaultTime()}
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
            defaultValue={defaultTime()}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            onChange={(event) => setEndTime(event.target.value)}
          />
        </StyledRow>
        {
          alert && <Alert>The start time should be earlier than the end time!</Alert>
        }
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
