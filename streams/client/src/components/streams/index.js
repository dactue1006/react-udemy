import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import StreamCreate from './StreamCreate';
import StreamDelete from './StreamDelete';
import StreamEdit from './StreamEdit';
import StreamList from './StreamList';
import StreamShow from './StreamShow';

class StreamContainer extends React.Component {
  render() {
    const { match } = this.props;
    console.log(match.url);
    return (
      <React.Fragment>
        <Route 
          exact
          path={`${match.url}`} 
          component={StreamList} />
        <Route 
          exact
          path={`${match.url}/new`}
          component={() => <StreamCreate/> }/>
        <Route 
          exact
          path={`${match.url}/edit`}
          component={StreamEdit} />
        <Route 
          exact
          path={`${match.url}/delete`}
          component={StreamDelete} />
        <Route 
          exact
          path={`${match.url}/show`}
          component={StreamShow} />
      </React.Fragment>
    )
  }
}

export default withRouter(StreamContainer);