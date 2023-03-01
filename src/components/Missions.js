import React from 'react';
import Title from './Title';
import Missioncard from './MissionCard';
import Missions from '../data/missions';

class Mission extends React.Component {
  render() {
    const missionsList = Missions.map((missions) => (<Missioncard
      key={ missions.name }
      name={ missions.name }
      year={ missions.year }
      country={ missions.country }
      destination={ missions.destination }
    />));
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missionsList}
      </div>
    );
  }
}

export default Mission;
