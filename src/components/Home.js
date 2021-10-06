import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { useHistory } from "react-router-dom";

/**
 * component to show deposit and withdraw buttons for navigation
 * @returns 
 */
const Home = () => {

  let history = useHistory();

  return (
    <>
      <Box m={7}>
        <Grid container spacing={3} >
          <Grid item>
            <Button
              name="deposit"
              id="deposit-btn"
              variant="contained"
              onClick={() => history.push("/deposit")}
            >
              Deposit</Button>
          </Grid>
          <Grid item >
            <Button
              name="withdraw"
              id="withdraw-btn"
              variant="contained"
              onClick={() => history.push("/withdraw")}
            >
              Withdraw</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home;
