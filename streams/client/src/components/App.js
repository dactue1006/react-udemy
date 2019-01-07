import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamContainer from './streams';
import Header from './Header';
import history from '../history';

class App extends React.Component {
  render() {
    return (
      <div className='ui container'>
        <Router history={history}>
          <React.Fragment>
            <Header />
            <Switch>
              <Route path='/streams' component={StreamContainer} />
              <Route path='/' component={StreamContainer}/>
              <Route path='*' component={() => 'not found'} />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    )
  }
}

export default App;