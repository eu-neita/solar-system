import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Mission from './components/Missions';

class app extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Mission />
      </div>
    );
  }
}

export default app;
