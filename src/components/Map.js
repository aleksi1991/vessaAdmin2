import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import kuva from '../img/tausta.jpg';

const Map = () => {
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
          <h2>Vessat kartalla</h2>

          <Card style={styles.card} elevation={3}>
          <img className="vessatKartalla" src={kuva}/>
          </Card>
        </div>
      </Paper>
    </Grid>
  );
};



export default Map;