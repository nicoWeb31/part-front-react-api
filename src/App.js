import React from 'react';
import Home from './core/Home';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="container">
        <h1>React  Frontend</h1>
        
        <Home/>

        </div>
    );
  }
}

export default App;
