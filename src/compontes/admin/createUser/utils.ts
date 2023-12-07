import User from "./interface";

const valitaion = (valitaionData: User, confirmPassword: String) => {
  const {
    fullName,
    Branch,
    IFC,
    accountNumber,
    address,
    email,
    password,
    phone,
    role,
  } = valitaionData;

  if (!fullName) {
    return "Please enter your first name";
  } else if (fullName.length > 20) {
    return "Max length 20 characters";
  } else if (!email) {
    return "Please enter your email";
  } else if (email.includes("@") && email.trim().length < 7) {
    return "Wrong email";
  } else if (!phone) {
    return "Please enter your phone number";
  } else if (phone.toString().length < 10) {
    return "Phone must be than 10 numbers";
  } else if (!address) {
    return "Please enter your address";
  } else if (!accountNumber) {
    return "Please enter your account number";
  } else if (!IFC) {
    return "Please enter your IFC Code";
  } else if (!Branch) {
    return "Please enter your Bank branch";
  } else if (!role) {
    return "Please Select Your Role";
  } else if (!password) {
    return "Please enter your password";
  } else if (!confirmPassword) {
    return "Please enter your confirmPassword";
  } else if (confirmPassword !== password) {
    return "Passwords do not match";
  } else {
    return "success";
  }
};

export default valitaion;
