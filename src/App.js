import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import PendingLocations from './components/PendingLocations';
import Locations from './components/Locations';
import Map from './components/Map';
import pendingLocationsService from './services/pendingLocations';
import locationsService from './services/locations';
import Grid from '@material-ui/core/Grid';


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
    setPendingLocations(pendingLocations.filter((pendingLocation) => pendingLocation === location));

    setLocations(locations.concat(location));
  };

  return (
    <div className="App">
      <Navigation />
      <Grid className="container" container spacing={8}>
        <Grid className="pending" item xs={6} >
          <PendingLocations
            setValidation={setValidation}
            pendingLocations={pendingLocations}
            label="Locations to approve"
            buttonLabel="Validate"
          />
        </Grid>
        
        <Grid className="locations" item xs={6}>
          <Locations locations={locations} />
        </Grid>

        <Grid className="locations" item xs={6}>
          <Map/>
        </Grid>

      </Grid>
    </div>
  );
};

export default App;
