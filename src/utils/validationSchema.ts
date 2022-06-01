import * as yup from "yup"
import moment from "moment"
import formModel from "./formModel"
const {
  formField: {
    firstName,
    lastName,
    address1,
    city,
    zipcode,
    country,
    username,
    password,
    confirmPassword,
  },
} = formModel

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/
export default [
  yup.object().shape({
    [firstName.name]: yup.string().required(firstName.requiredErrorMsg),
    [lastName.name]: yup.string().required(`${lastName.requiredErrorMsg}`),
    [address1.name]: yup.string().required(`${address1.requiredErrorMsg}`),
    [city.name]: yup.string().nullable().required(`${city.requiredErrorMsg}`),
    [zipcode.name]: yup
      .string()
      .required(`${zipcode.requiredErrorMsg}`)
      .test(
        "len",
        `${zipcode.invalidErrorMsg}`,
        (val) => val && val.length === 5
      ),
    [country.name]: yup
      .string()
      .nullable()
      .required(`${country.requiredErrorMsg}`),
  }),
   
]