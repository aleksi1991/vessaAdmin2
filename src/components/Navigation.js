import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const Navigation = () => {
  const styles = {
    container: {
      width: '100%',
      heigth: '20vh',
      backgroundColor: '#85cad4',
      padding: '5rem',
    },
    login: {
      // backgroundColor: '#fff',
    },
  };

  return (
    <Grid container xs={12}>
        <Paper item className="navigation-container" style={styles.container}>Hallintanäkymä</Paper>
        {/* <Paper>Kirjautuminen</Paper> */}
    </Grid>
  );
};

export default Navigation;
