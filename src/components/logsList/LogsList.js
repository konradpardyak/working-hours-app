import Surface from '../shared/Surface';
import Header from '../shared/Header';
import LogElement from './LogElement';

import { connect } from 'react-redux';

const LogList = ({logs}) => {
  return(
    <Surface>
      <Header>Log List</Header>
      {
        logs && logs.map((log) => {
          return <LogElement key={log.id} log={log}/>
        })
      }
    </Surface>
  );
}

const mapStateToProps = (state) => {
  return {
    logs: state.logs.logs
  }
}

export default connect(mapStateToProps)(LogList);
