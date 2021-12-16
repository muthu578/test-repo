export default function validate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 or more characters";
  }
  if (!values.fname) {
    errors.fname = "First Name is required";
  }
  if (!values.lname) {
    errors.lname = "Last Name is required";
  }
  return errors;
}
