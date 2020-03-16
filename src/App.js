import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ListContext from './context/list/listContext';
import ItemContext from './context/item/itemContext';

import Lists from './components/Lists';

function App() {
  return (
    <ListContext>
      <ItemContext>
        <Router>
          <div className='App'>
            <h1>Kanban Board</h1>
            <Lists />
          </div>
        </Router>
      </ItemContext>
    </ListContext>
  );
}

export default App;
