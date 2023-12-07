import Login from "./interface";
const valitaion = (valitaionData: Login) => {
  const { email, password } = valitaionData;

  if (!email) {
    return "Please enter your email";
  } else if (email.includes("@") && email.trim().length < 7) {
    return "Wrong email";
  } else if (!password) {
    return "Please enter your password";
  } else {
    return "success";
  }
};

export default valitaion
