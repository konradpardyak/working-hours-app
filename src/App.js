import styled from 'styled-components';

import AddLog from './components/addLog/AddLog';
import Diagram from './components/diagram/Diagram';
import LogsList from './components/logsList/LogsList';

const StyledApp = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;
  background-color: #fdfdfd;
  font-family: 'Roboto', sans-serif;
`
const MainHeader = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 1rem;
  justify-content: center;
  @media (min-width: 600px) {
    flex-direction: row;
    align-items: flex-start;
  }
  @media (min-width: 1200px) {
    width: 1100px;
  }
  `
const FlexGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const App = () => {

  return (
    <StyledApp>
      <MainHeader>Working Hours App</MainHeader>
      <Container>
        <Diagram />
        <FlexGroup>
          <AddLog />
          <LogsList />
        </FlexGroup>
      </Container>
    </StyledApp>
  );
}

export default App;
