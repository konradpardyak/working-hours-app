import styled from 'styled-components';
import Day from './Day';
import Header from '../shared/Header';
import WeekDayOffset from './WeekDayOffset';

import IconButton from '@material-ui/core/IconButton';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import { useState, useEffect } from 'react';

const StyledMonth = styled.div`
  display: flex;
  flex-direction: column;
`
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const SubHeader = styled(Header)`
  margin-top: 1rem;
  font-size: 1.25rem;
`
const StyledCalendar = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: .5rem;
  border-bottom: 1px solid #bcbcbc;
`
const Total = styled.div`
  display: flex;
  justify-content: space-around;
`

const Month = ({ monthLogs, monthNumber, yearNumber, previous, next }) => {
  const [calendarDays, setCalendarDays] = useState();
  const [weekDayOffset, setWeekDayOffset] = useState();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  useEffect(()=> {
    const numberOfDaysInThisMonth = new Date(yearNumber, monthNumber + 1, 0).getDate();
    const lastMonthWeekDay = new Date(yearNumber, monthNumber, 0).getDay();
    setWeekDayOffset(lastMonthWeekDay);
    let days = [];
    for (let i = 1; i <= numberOfDaysInThisMonth; i++) {
      const filteredDays = monthLogs.filter((log) => {
        return (new Date(log.day).getDate()) === i;
      });
      const totalTime = filteredDays.reduce((currentTotal, day) => {
        return ((new Date(`${day.day}T${day.endTime}`).getTime())-(new Date(`${day.day}T${day.startTime}`).getTime())) + currentTotal;
      }, 0);
      days.push({id: i, totalTime: totalTime});
    }
    setCalendarDays(days);
  }, [monthLogs, monthNumber, yearNumber]);

  return(
    <StyledMonth>
      <Top>
        <IconButton aria-label="previous" color="primary" onClick={previous}>
          <NavigateBeforeIcon />
        </IconButton>
        <Header>
          {monthNames[monthNumber]} {yearNumber}
        </Header>
        <IconButton aria-label="next" color="primary" onClick={next}>
          <NavigateNextIcon />
        </IconButton>
      </Top>
      <StyledCalendar>
        {
          weekDayOffset ? <WeekDayOffset width={weekDayOffset * 14.28 + "%"} /> : false
        }
        {
          calendarDays && calendarDays.map((day) => {
            return <Day key={day.id} day={day.id} totalTime={day.totalTime} />
          })
        }
      </StyledCalendar>
      <Total>
        <SubHeader>Total:</SubHeader>
        <SubHeader>
          {
            calendarDays && ((calendarDays.reduce((currentTotal, day) => {
              return day.totalTime + currentTotal;
            }, 0))/3600000).toFixed(2)
          }h
        </SubHeader>
      </Total>
    </StyledMonth>
  )
}

export default Month;
