import React, {FC} from "react";
import { FormikValues } from "formik";

import { InputField } from "../../atoms/formFields";
import { Grid, Typography } from "@mui/material";



interface PropsType{
    formField:FormikValues
}

const CredentialForm: FC<PropsType> = (props)=>{
    const {
        formField:{username,password,confirmPassword},
    }=props

    return(
        <>
        <Typography variant="h6" gutterBottom>
            Credential Details
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
                <InputField
                defaultProps={{
                    name:username.name,
                    label:username.label,
                    fullWidth:true,
                }} />
                </Grid>

                <Grid item xs={12} md={6}>
                <InputField
                defaultProps={{
                    name:password.name,
                    label:password.label,
                    fullWidth:true,
                }} />
                </Grid>

                <Grid item xs={12} md={6}>
                <InputField
                defaultProps={{
                    name:confirmPassword.name,
                    label:confirmPassword.label,
                    fullWidth:true,
                }} />
                </Grid>


        </Grid>
        </>
    )

}

export default CredentialForm;