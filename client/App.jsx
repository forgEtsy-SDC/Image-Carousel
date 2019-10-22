import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Carousel from './components/Carousel/Carousel.jsx';

class App extends React.Component {
  render(){
    return (
      <Router>
        <Route path="/:productId"
          render={(routeProps) => {
            console.log(routeProps);
            return <Carousel {...routeProps}/>
          }}
        />
      </Router>
    )
  }
}

export default App;