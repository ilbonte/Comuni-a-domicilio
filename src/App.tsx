import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import City from './City';

export default class App extends React.PureComponent {
  render() {
    return ( //TOOD passare il link del foglio google al componente city
    <Router>
        <div>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/castiglione-delle-stiviere' component={City} /> 
          </Switch>
        </div>
      </Router>
    );
  }
}
