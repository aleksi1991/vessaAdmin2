import React, { useState, useEffect } from 'react';
import PendingLocations from './components/PendingLocations';
import Locations from './components/Locations';
import pendingLocationsService from './services/pendingLocations';
import locationsService from './services/locations';

import './App.css';

const App = () => {
  const [pendingLocations, setPendingLocations] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const getLocations = async () => {
      const resPendingLocations = await pendingLocationsService.getAll();
      setPendingLocations([...pendingLocations, ...resPendingLocations]);
      const resLocations = await locationsService.getLocations();
      setLocations(locations.concat(resLocations));
    };
    getLocations();
  }, []);

  const setValidation = (location) => {
    console.log(location);
    setPendingLocations(pendingLocations.filter((pendingLocation) => pendingLocation === location))

    setLocations(locations.concat(location));
  };

  return (
    <div className="App">
      <PendingLocations
        setValidation={setValidation}
        pendingLocations={pendingLocations}
        label="Locations to approve"
        buttonLabel="Validate"
      />
      {/* {pendingLocations.map((pendingLocation) => (
        <>
          <li>{pendingLocation.name}</li>
          <li>{pendingLocation.payable}</li>
          <li>{pendingLocation.type}</li>
        </>
      ))} */}
      <Locations locations={locations} />
      {/* {locations.map((location) => (
        <>
        <li>{location.name}</li>
        <li>{location.payable}</li>
        <li>{location.type}</li>
        </>
      ))} */}
    </div>
  );
};

export default App;
