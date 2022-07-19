import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <form onSubmit={() => {}}>
      <label>Dispaly Name</label>
      <input
        type="text"
        name="displayName"
        value={displayName}
        onChange={handleChange}
        required
      />

      <label>E-mail</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        required
      />

      <label>Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        required
      />

      <label>Confirm Password</label>
      <input
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleChange}
        required
      />

      <button type="submit">SIGN UP</button>
    </form>
  );
};

export default SignUp;
