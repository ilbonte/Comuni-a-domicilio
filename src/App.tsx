import React from 'react';
import Container from 'react-bootstrap/Container';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom'

import Homepage from './Homepage';
import Municipality from './Municipality';
import Info from './Info';

export default class App extends React.Component {
      public render(): React.ReactNode {
        return (
            <Router>
                <Container className='pt-2 mb-n2'>
                    <Link to='/' className='text-dark'> <i className='fas fa-home'/> Comuni a Domicilio</Link>
                </Container>

                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/municipality/:slug" component={Municipality} />
                    <Route exact path="/info" component={Info} />
                </Switch>
            </Router>
        );
    }
}
