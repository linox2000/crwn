import { useState } from "react";
import {
  createUserAuthWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../firebase/utilits";

import "./sign-up-form.style.scss";
import FormInput from "../form-input/form-input.component";

const SignUp = () => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formFilds, setFormFilds] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFilds;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFilds({ ...formFilds, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) alert("palavra-passe nao corresponde");
    try {
      const { user } = await createUserAuthWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      setFormFilds(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use")
        alert("email ja em utilizaçao");
      switch (error) {
        case error.code === "auth/email-already-in-use":
          alert("email ja em utilizaçao");
          break;

        default:
          console.log("error creation user", error.code);
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Nao tem uma conta</h2>
      <span>Cadastra-se com email e password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Nome"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <FormInput
          label="Email"
          type="email"
          value={email}
          required
          onChange={handleChange}
          name="email"
        />

        <FormInput
          label="Password"
          value={password}
          type="password"
          required
          onChange={handleChange}
          name="password"
        />

        <FormInput
          label="Confirmar Password"
          value={confirmPassword}
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
        />

        <button type="submit">Cadastrar </button>
      </form>
    </div>
  );
};

export default SignUp;
