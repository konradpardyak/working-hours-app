import styled from 'styled-components';
import Surface from '../shared/Surface';
import Month from './Month';

import { connect } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

const StyledDiagram = styled(Surface)`
  @media (min-width: 600px) {
    width: 75%;
    margin-right: 1rem;
  }
`

const Diagram = ({logs}) => {
  const [showMonth, setShowMonth] = useState(new Date().getMonth());
  const [showYear, setShowYear] = useState(new Date().getFullYear());
  const [monthLogs, setMonthLogs] = useState();

  useEffect(() => {
    const filteredLogs = logs.filter((log) => {
      return (new Date(log.day).getMonth() === showMonth && new Date(log.day).getFullYear() === showYear);
    });
    setMonthLogs(filteredLogs);
  },[logs, showMonth, showYear]);

  const handleShowPrevious = () => {
    if(showMonth) {
      setShowMonth(showMonth - 1)
    } else {
      setShowYear(showYear - 1);
      setShowMonth(11);
    }
  }
  const handleShowNext = () => {
    if(showMonth === 11) {
      setShowYear(showYear + 1);
      setShowMonth(0);
    } else {
      setShowMonth(showMonth + 1);
    }
  }
  
  return(
    <StyledDiagram>
      {monthLogs &&
        <Month monthLogs={monthLogs} monthNumber={showMonth} yearNumber={showYear} previous={handleShowPrevious} next={handleShowNext}/>
      }
    </StyledDiagram>
  );
}

const mapStateToProps = (state) => {
  return {
    logs: state.logs.logs
  }
}

export default connect(mapStateToProps)(Diagram);
