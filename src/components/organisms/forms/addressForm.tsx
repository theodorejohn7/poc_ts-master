// import { CssBaseline, Paper } from "@mui/material";

import { Grid, Typography } from "@mui/material";
import { FormikValues } from "formik";
import { FC } from "react";
import { InputField } from "../../atoms/formFields";

import  {SelectField} from "../../atoms/formFields" ;


interface PropsType {
  formField: FormikValues;
}

const AddressForm: FC<PropsType> = (props) => {
  const {
    formField: {
      firstName,
      lastName,
      address1,
      address2,
      city,
      state,
      zipcode,
      country,
     
    },
  } = props;

  return (
    <>
      {/* <div>Address Form</div> */}
      <Typography>Personal Details Form </Typography>
      <Grid container spacing={3}>
        
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: firstName.name,
              label: firstName.label,
              fullWidth: true,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: lastName.name,
              label: lastName.label,
              fullWidth: true,
            }}
          />
        </Grid> 

        <Grid item xs={12}>
          <InputField
            defaultProps={{
              name: address1.name,
              label: address1.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            defaultProps={{
              name: address2.name,
              label: address2.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={city.name}
            label={city.label}
            data={cities}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={state.name}
            label={state.label}
            data={states}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: zipcode.name,
              label: zipcode.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={country.name}
            label={country.label}
            data={countries}
            fullWidth
          />
        </Grid>
        
      </Grid>
    </>
  );
};



const cities = [
    {
      value: undefined,
      label: "None",
    },
    {
      value: "New York",
      label: "New York",
    },
    {
      value: "Chicago",
      label: "Chicago",
    },
    {
      value: "Saigon",
      label: "Saigon",
    },
  ]
  
  const states = [
    {
      value: undefined,
      label: "None",
    },
    {
      value: "Florida",
      label: "Florida",
    },
    {
      value: "Michigan",
      label: "Michigan",
    },
    {
      value: "Texas",
      label: "Texas",
    },
  ]
  
  const countries = [
    {
      value: null,
      label: "None",
    },
    {
      value: "United States",
      label: "United States",
    },
    {
      value: "Italy",
      label: "Italy",
    },
    {
      value: "Vietnam",
      label: "Vietnam",
    },
  ]
  


export default AddressForm;
