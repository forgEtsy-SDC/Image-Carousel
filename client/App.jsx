import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router-dom';
import Carousel from './components/Carousel/Carousel.jsx';

const defaultHistory = createBrowserHistory();

const App = ({ history = defaultHistory }) => {
    return (
      <Router history={history}>
        <Route path="/:productId"
          render={(routeProps) => {
            return <Carousel {...routeProps}/>
          }}
        />
      </Router>
    )
}

export default App;