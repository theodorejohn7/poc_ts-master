import model from "./formModel"

const {
  formField: {
    firstName,
    lastName,
    address1,
    city,
    zipcode,
    country,
    useAddressForPaymentDetails,
    username,
    password,
    confirmPassword,
    
  },
} = model

export default {
  [firstName.name]: "",
  [lastName.name]: "",
  [address1.name]: "",
  [city.name]: "",
  [zipcode.name]: "",
  [country.name]: "",
  [useAddressForPaymentDetails.name]: false,
  [username.name]: "",
  [password.name]: "",
  [confirmPassword.name]: "",
}