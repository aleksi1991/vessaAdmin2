import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

const Locations = ({ locations, setValidation }) => {
  const styles = {
    paper: {
      padding: '1rem',
    },
    card: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '1rem',
      marginBottom: '1rem',
    }
    
  };


  return (
    <Grid>
      <Paper style={styles.paper} elevation={3}>
        <div>
          <h2>Hyväksytyt</h2>

          <Card style={styles.card} elevation={3}>
            <div>Nimi</div>
            <Button variant="outlined" color="primary">Muokkaa</Button>
            <Button variant="outlined" color="primary">Poista</Button>
          </Card>
          
        
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


// <Card style={styles.card} elevation={3}>
// <div>Nimi</div>
// <Button variant="outlined" color="primary">
//   Muokkaa
// </Button>
// </Card>
