import React from 'react';
import propTypes from 'prop-types';

class Missioncard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">{name}</p>
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
      </div>
    );
  }
}

Missioncard.propTypes = {
  name: propTypes.string,
  year: propTypes.string,
  country: propTypes.string,
  destination: propTypes.string,
}.requirer;

export default Missioncard;
