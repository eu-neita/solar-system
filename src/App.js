import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';

class app extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
      </div>
    );
  }
}

export default app;
