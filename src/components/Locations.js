import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const Locations = ({ locations, setValidation }) => {

  const styles = {
    padding: '1rem',
  }

  return (
    <Grid item xs={6}>
      <Paper style={styles}>
        <div>
          <h2>Locations</h2>
          {locations.map((location) => (
            <div key={location._id} style={{ display: 'flex' }}>
              <div style={{ marginRight: '1rem' }}>{location.name}</div>
              <div style={{ marginRight: '1rem' }}>{location.type}</div>
              <div style={{ marginRight: '1rem' }}>{location.payable}</div>
            </div>
          ))}
        </div>
      </Paper>
    </Grid>
  );
};

export default Locations;
