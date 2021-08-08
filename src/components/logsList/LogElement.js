import styled from 'styled-components';
import Surface from '../shared/Surface';
import Header from '../shared/Header';
import Alert from '../shared/Alert';
import { StyledLabel, StyledRow } from '../shared/Form';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { useState } from 'react';
import { connect } from 'react-redux';
import { removeLog, editLog } from '../../redux/logsActions';

const StyledMainLogElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0;
`
const TimeGroup = styled.div`
  flex-grow: 1;
  min-width: 130px;
`
const InnerGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    margin: .25rem 0;
    font-weight: 500;
  }
`
const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: column;
`
const EditHeader = styled(Header)`
  margin-top: 1rem;
`

const LogElement = ({ log, removeLog, editLog }) => {
  const { id, day, startTime, endTime } = log;

  const [editMode, setEditMode] = useState(false);
  const [newDate, setNewDate] = useState(day);
  const [newStartTime, setNewStartTime] = useState(startTime);
  const [newEndTime, setNewEndTime] = useState(endTime);
  const [alert, setAlert] = useState(false);

  const handleRemoveOnClick = () => {
    removeLog(id);
  }

  const handleEditOnClick = () => {
    setEditMode(!editMode);
  }

  const handleSaveOnClick = () => {
    

    if(new Date(`${newDate}T${newEndTime}`).getTime() > new Date(`${newDate}T${newStartTime}`).getTime()) {
      setAlert(false);
      editLog(id, newDate, newStartTime, newEndTime);
      setEditMode(false);
    } else {
      setAlert(true);
    }
  }

  return(
    <Surface>
      <StyledMainLogElement>
        <TimeGroup>
          <InnerGroup>
            <h3>Day:</h3>{day}
          </InnerGroup>
          <InnerGroup>
            <h3>Start:</h3>{startTime}
          </InnerGroup>
          <InnerGroup>
            <h3>End:</h3>{endTime}
          </InnerGroup>
        </TimeGroup>
        <ButtonsGroup>
          <IconButton aria-label="remove" color="secondary" onClick={handleRemoveOnClick}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="edit" color="primary" onClick={handleEditOnClick}>
            <EditIcon />
          </IconButton>
        </ButtonsGroup>
      </StyledMainLogElement>
      {editMode &&
      <form>
        <EditHeader>Edit this log</EditHeader>
        <StyledRow>
          <StyledLabel>Select Day</StyledLabel>
          <TextField
            id="date"
            type="date"
            defaultValue={newDate}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(event) => setNewDate(event.target.value)}
          />
        </StyledRow>
        <StyledRow>
          <StyledLabel>Start Time</StyledLabel>
          <TextField
            id="time"
            type="time"
            defaultValue={newStartTime}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            onChange={(event) => setNewStartTime(event.target.value)}
          />
        </StyledRow>
        <StyledRow>
          <StyledLabel>End Time</StyledLabel>
          <TextField
            id="time"
            type="time"
            defaultValue={newEndTime}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            onChange={(event) => setNewEndTime(event.target.value)}
          />
        </StyledRow>
        {
          alert && <Alert>The start time should be earlier than the end time!</Alert>
        }
        <Button variant="contained" color="secondary" onClick={handleSaveOnClick}>Save</Button>
      </form>
      }
    </Surface>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeLog: (id) => dispatch(removeLog(id)),
    editLog: (id, day, startTime, endTime) => dispatch(editLog(id, day, startTime, endTime))
  }
}

export default connect(null, mapDispatchToProps)(LogElement);
