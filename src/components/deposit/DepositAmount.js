import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Select from '@mui/material/Select';
import DenominationCurrency from '../../Data/data.json';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Formik, Form } from 'formik';
import '../../stylings/appStyles.css';
import { depositAmount } from '../../actions'
import AvailableDenomination from './AvailableDenomination';

const DepositAmount = () => {

  let denominationVal = '';
  let quantityVal = '';

  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  /**
   * method to dispatch deposit amount action with data
   * @param val 
   */
  const handleAddClick = (val) => {
    let data = [...selector.finance.data, { denomVal: val.denominationVal.value, quanVal: val.quantityVal, mul: val.denominationVal.id * val.quantityVal }];
    dispatch(depositAmount({ payload: data }));
  }

  return (
    <>
      <Box m={7}>
        <Typography variant="h5" mb={3}>DEPOSIT</Typography>
        <Card m={2} variant="outlined">
          <CardContent>
            <Formik
              initialValues={{
                denominationVal: denominationVal,
                quantityVal: quantityVal
              }}
              validate={(values) => {
                let errors = {};
                if (!values.denominationVal) {
                  errors.denominationVal = "Please select Denomination currency value";
                }
                if (!values.quantityVal) {
                  errors.quantityVal = "Please enter Quantity";
                }
                return errors;
              }}
              onSubmit={(data) => {
                handleAddClick(data);
              }}
            >
              {({ values, handleChange, resetForm, errors }) => (
                <Form>
                  <Grid container spacing={2} >
                    <Grid item xs={4}>
                      <FormControl fullWidth>
                        <InputLabel id="denomination-currency-select-label">Denomination Currency</InputLabel>
                        <Select
                          labelId="Denomination Currency"
                          name="denominationVal"
                          id="denominationVal"
                          value={values.denominationVal || ''}
                          label="Denomination Currency"
                          onChange={handleChange}
                        >
                          <MenuItem value="">Select</MenuItem>
                          {
                            DenominationCurrency.map((data) => (<MenuItem key={data.id} value={data}>{data.value}</MenuItem>))
                          }
                        </Select>
                      </FormControl>
                      {errors.denominationVal ? <div className="errorMsg">{errors.denominationVal}</div> : null}
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={4}>
                      <TextField
                        id="quantityVal"
                        label="Quantity"
                        name="quantityVal"
                        variant="outlined"
                        type="input"
                        value={values.quantityVal || ''}
                        onChange={handleChange} />
                      {errors.quantityVal ? <div className="errorMsg">{errors.quantityVal}</div> : null}
                    </Grid>
                    <Grid item>
                      <Button
                        style={{ marginTop: "10px" }}
                        variant="contained"
                        type="submit"
                        color="inherit"
                      >
                        ADD</Button>
                    </Grid>
                    <Grid item >
                      <Button
                        onClick={resetForm}
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
            <AvailableDenomination />
          </CardContent>
        </Card>
      </Box>
    </>
  )
}

export default DepositAmount
