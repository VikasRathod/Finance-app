import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

const AvailableDenomination = () => {

  const state = useSelector(state => state);

  return (
    <Grid
      container
      spacing={1}
      direction="column"
      alignItems="center"
      justify="center"
    >
      {
        state.finance.data.length > 0 ?
          <>
            <Grid item xs={12}>
              <Typography variant="h6" mt={5}>Available Denomination (Currency Notes)</Typography>
              <hr />
            </Grid>
            {
              state.finance.data.map((val) => {
                return <div className="flex-container">
                  <div>{val.denomVal}</div>
                  <div> x </div>
                  <div>{val.quanVal}</div>
                  <div> =  </div>
                  <div>{val.mul}</div>
                </div>
              })
            }
          </>
          : null
      }
    </Grid>
  )
}

export default AvailableDenomination
