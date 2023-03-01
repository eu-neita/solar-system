import React from 'react';
import Title from './Title';
import Planetcard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const planetsList = Planets.map((planet) => (<Planetcard
      key={ planet.name }
      planetName={ planet.name }
      planetImage={ planet.image }
    />));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { planetsList }
      </div>
    );
  }
}

export default SolarSystem;
