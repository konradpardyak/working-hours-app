import styled from 'styled-components';

const StyledDay = styled.div`
  width: 14.28%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: .5rem;
  height: 100px;
`
const WorkingDay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 2rem;
`
const Bar = styled.div`
  display: flex;
  align-items: flex-end;
  width: 1.75rem;
  height: 70px;
`
const BarProgress = styled.div`
  max-height: 100%;
  height: ${props => props.height};
  width: 100%;
  background-color: #3f51b5;
`
const BarLabel = styled.span`
  color: #3f51b5;
  font-size: .70rem;
  font-weight: 800;
`
const EmptyDay = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 2rem;
  
`

const Day = ({day, totalTime}) => {
  return(
    <StyledDay>
      {totalTime
      ? <WorkingDay>
          <Bar>
            <BarProgress height={`${totalTime/360000}%`}>
            </BarProgress>
          </Bar>
          <BarLabel>{(totalTime/3600000).toFixed(2)}h</BarLabel>
          {day}
        </WorkingDay>
      : <EmptyDay>{day}</EmptyDay>
      }
    </StyledDay>
  )
}

export default Day;
