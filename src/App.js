import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ListState from './context/list/ListState';
import ItemState from './context/item/ItemState';

import Home from './components/pages/Home';

const App = () => {
  return (
    <ListState>
      <ItemState>
        <Router>
          <Fragment>
            <h1>Kanban Board</h1>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </Fragment>
        </Router>
      </ItemState>
    </ListState>
  );
};

export default App;
