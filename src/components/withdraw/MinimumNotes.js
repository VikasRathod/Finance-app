import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import '../../stylings/appStyles.css';


const MinimumNotes = () => {

    const state = useSelector(state => state);
    const amount = state.finance.amount;
    let total = [];

    /**
     * Method to calculate min no of Notes required for given amount
     * @param amount 
     * @returns 
     */
    const calcNotes = (amount) => {
        let notes = [2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
        let noteCounter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let result = [];
        for (let i = 0; i < notes.length; i++) {
            if (amount >= notes[i]) {
                noteCounter[i] = Math.floor(amount / notes[i]);
                amount = amount - noteCounter[i] * notes[i];
            }
        }
        // to display denomination notes
        for (let j = 0; j < notes.length; j++) {
            if (noteCounter[j] !== 0) {
                total.push(notes[j] * noteCounter[j]);
                result.push(
                    <div className="flex-container">
                        <div>Rs. {notes[j]}</div>
                        <div> x </div>
                        <div>{noteCounter[j]}</div>
                        <div> =  </div>
                        <div>{notes[j] * noteCounter[j]}</div>
                    </div>
                )
            }
        }
        return result;
    }

    return (
        <Grid
            container
            spacing={1}
            direction="column"
            alignItems="center"
            justify="center"
        >
            {
                Object.keys(amount).length > 0 ?
                    <>
                        <Grid item xs={12}>
                            <Typography variant="h6" mt={5}>Minimum number of notes required for Rs. {amount.amountVal}</Typography>
                            <hr />
                        </Grid>
                        <Grid>
                            {calcNotes(amount.amountVal)}
                            <hr />
                            <div className="flex-container">
                                <div>Total:</div>
                                <div> </div>
                                <div></div>
                                <div>Rs.</div>
                                <div>{total.reduce((a, b) => a + b, 0)}</div>
                            </div>
                        </Grid>
                    </>
                    : null
            }


        </Grid>
    )
}

export default MinimumNotes;
