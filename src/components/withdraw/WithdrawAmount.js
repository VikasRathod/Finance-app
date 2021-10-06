import React from 'react';
import { useDispatch } from 'react-redux'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Formik, Form } from 'formik';
import '../../stylings/appStyles.css';
import { withdrawAmount, resetAmount } from '../../actions'
import MinimumNotes from './MinimumNotes';

const WithdrawAmount = () => {

  let amountVal = '';

  const dispatch = useDispatch();

  /**
   * method to dispatch withdraw Amount with amount val entered by user
   * @param {amount entered by the user} val 
   */
  const handleAddClick = (val) => {
    let data = val;
    dispatch(withdrawAmount({ payload: data }));
  }

  /**
   * method to dispatch action for resetting amount in store and clearing input field
   * @param  resetForm 
   */
  const resetHandleChange = (resetForm) => {
    resetForm();
    dispatch(resetAmount({ payload: 0 }));
  }

  return (
    <>
      <Box m={7}>
        <Typography variant="h5" mb={3}>WIDTHDRAW</Typography>
        <Card m={2} variant="outlined">
          <CardContent>
            <Formik
              initialValues={{
                amountVal: amountVal,
              }}
              validate={(values) => {
                let errors = {};
                if (!values.amountVal) {
                  errors.amountVal = "Please enter Widthdraw amount";
                }
                return errors;
              }}
              onSubmit={(data) => {
                handleAddClick(data);
              }}
            >
              {({ values, handleChange, errors, resetForm }) => (
                <Form>
                  <Grid container spacing={2} >
                    <Grid item xs={2}>
                      <Typography variant='h6' mt={2} mb={3} ml={2}>Widthdraw Amount</Typography>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={3}>
                      <TextField
                        id="amountVal"
                        label="Amount"
                        name="amountVal"
                        variant="outlined"
                        type="input"
                        value={values.amountVal || ''}
                        onChange={handleChange} />
                      {errors.amountVal ? <div className="errorMsg">{errors.amountVal}</div> : null}
                    </Grid>
                    <Grid item>
                      <Button
                        style={{ marginTop: "10px" }}
                        variant="contained"
                        type="submit"
                        color="inherit"
                      >
                        WITHDRAW</Button>
                    </Grid>
                    <Grid item >
                      <Button
                        onClick={() => resetHandleChange(resetForm)}
                        style={{ marginTop: "10px" }}
                        variant="contained"
                        color="inherit"
                      >
                        Reset</Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
            <MinimumNotes />
          </CardContent>
        </Card>
      </Box>
    </>
  )
}

export default WithdrawAmount
