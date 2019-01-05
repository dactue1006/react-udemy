import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StreamContainer from './streams';
import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <div className='ui container'>
        <Router>
          <React.Fragment>
            <Header />
            <Switch>
              <Route path='/stream' component={StreamContainer} />
              <Route path='*' component={() => 'not found'} />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    )
  }
}

export default App;