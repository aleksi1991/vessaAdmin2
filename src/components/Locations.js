import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const Locations = ({ locations, setValidation }) => {

  const styles = {
    padding: '1rem',
  }

  return (
    <Grid>
      <Paper style={styles}>
        <div>

          <h2>Locations</h2>
          <paper elevation={3}>
            <div>Nimi</div>
            <Button variant="outlined" color="primary">Muokkaa</Button>
          </paper>
          <paper elevation={3}>
            <div>Nimi</div>
            <Button variant="outlined" color="primary">Muokkaa</Button>
          </paper>
          <paper elevation={3}>
            <div>Nimi</div>
            <Button variant="outlined" color="primary">Muokkaa</Button>
          </paper>
          <paper elevation={3}>
            <div>Nimi</div>
            <Button variant="outlined" color="primary">Muokkaa</Button>
          </paper>
        </div>
      </Paper>
    </Grid>
  );
};

export default Locations;


// {locations.map((location) => (
//   <div key={location._id} style={{ display: 'flex' }}>
//     <div style={{ marginRight: '1rem' }}>{location.name}</div>
//     <div style={{ marginRight: '1rem' }}>{location.type}</div>
//     <div style={{ marginRight: '1rem' }}>{location.payable}</div>
//   </div>
// ))}