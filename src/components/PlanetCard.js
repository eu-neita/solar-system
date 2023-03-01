import React from 'react';
import propTypes from 'prop-types';

class Planetcard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

Planetcard.propTypes = {
  planetName: propTypes.string,
  planetImage: propTypes.string,
}.requirer;

export default Planetcard;
