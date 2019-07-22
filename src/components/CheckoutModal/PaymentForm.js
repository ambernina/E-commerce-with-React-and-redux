import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const PaymentForm = ({ values, onChange }) => {
  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField 
            required 
            id="cardName" 
            name="cardName"
            label="Name on card" 
            fullWidth 
            value={values.cardName || ''}
            onChange={onChange}
            />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
            required 
            id="cardNumber" 
            name="cardNumber"
            label="Card number" 
            fullWidth
            value={values.cardNumber || ''}
            onChange={onChange}
            />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
            required 
            id="expDate" 
            name="expiryDate"
            label="Expiry date" 
            fullWidth
            value={values.expiryDate || ''}
            onChange={onChange}
            />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            name="CVV"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            value={values.CVV || ''}
            onChange={onChange}
          />
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default PaymentForm
