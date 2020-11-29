import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';



const Navigation = () => {
  const styles = {
    container: {
      width: '100%',
      heigth: '20vh',
      backgroundColor: '#80BDC6',
      padding: '5rem',
    },
    login: {
      width: '100%',
      heigth: '20vh',
      backgroundColor: '#80BDC6',
      padding: '5rem',
    },
  };

  return (
    <div className="navigation-container">
      <Grid container>

        <Grid item xs={6} style={styles.container}>
          <div>LOGO</div>
          <div>Hallintanäkymä</div>
        </Grid>

        <Grid item xs={6} style={styles.login}>
          <div>Käyttäjä</div>
          <Button variant="outlined" color="primary">Kirjaudu ulos</Button>

        </Grid>

      </Grid>
    </div>
  );
};

export default Navigation;
