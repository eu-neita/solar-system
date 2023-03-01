import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';

class app extends React.Component {
  render() {
    const headText = 'teste';
    return (
      <div>
        <Header />
        <SolarSystem />
        <Title headline={ headText } />
      </div>
    );
  }
}

export default app;
