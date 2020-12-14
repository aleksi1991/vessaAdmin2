import React from 'react';
import pendingLocationsService from '../services/pendingLocations';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import kuva from '../img/kartta.jpg';





const PendingLocations = ({ pendingLocations, setValidation, label, buttonLabel }) => {
  const styles = {
    paper: {
      padding: '1rem',
    },
    card: {
      display:' ',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '1rem',
      marginBottom: '1rem',
    }
    
  };

  const validate = async (location) => {
    const validatedLocation = {
      ...location,
      validated: true,
    };

    const deleteFormPendingLocations = await pendingLocationsService.validateLocation(location);

    if (deleteFormPendingLocations) {
      const updatedLocation = await pendingLocationsService.updateLocation(validatedLocation);
      setValidation(updatedLocation);
    }

    // const response = await pendingLocationsService.updateLocation(validatedLocation);
    // setValidation(response);
  };

  return (
    <Grid>
      <Paper style={styles.paper} elevation={3}>
        <div style={{ marginBottom: '1rem' }}>
          <h2>Hyväksyttävät</h2>
          <Card style={styles.card} elevation={3}>
            <div>Nimi</div>
            <div>Tyyppi</div>
            <div>Sijainti</div>
            <div>Maksullisuus</div>
            <div><img className="vessaKartalla" src={kuva}></img></div>
            <Button variant="outlined" color="primary">Hyväksy</Button>
            <Button variant="outlined" color="primary">Hylkää</Button>
            <Button variant="outlined" color="primary">Muokkaa</Button>
          </Card>
        </div>
      </Paper>
    </Grid>
  );
};

export default PendingLocations;


// {pendingLocations.map((pendingLocation) => (
//   <div key={pendingLocation._id} style={{ display: 'flex' }}>
//     <div style={{ marginRight: '1rem' }}>{pendingLocation.name}</div>
//     <div style={{ marginRight: '1rem' }}>{pendingLocation.type}</div>
//     <div style={{ marginRight: '1rem' }}>{pendingLocation.payable}</div>
//     <button onClick={() => validate(pendingLocation)}>{buttonLabel}</button>
//   </div>
// ))}