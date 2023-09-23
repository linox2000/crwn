import {
  signInWithGoogePopup,
  signUserAuthWithEmailAndPassword,
} from "../../firebase/utilits";
import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.style.scss";

const SignIn = () => {
  const signInWithGoogle = async () => {
    await signInWithGoogePopup();
  };

  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formFilds, setFormFilds] = useState(defaultFormFields);
  const { email, password } = formFilds;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFilds({ ...formFilds, [name]: value });
  };

  const restFormFields = () => setFormFilds(defaultFormFields);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signUserAuthWithEmailAndPassword(email, password);
      restFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("palavra-passe errada");
          break;
        case "auth/user-not-found":
          alert("usuario inexistente");
          break;
        default:
          console.log("error creating user", error);
      }
    }
  };
  return (
    <div className="sign-in-container">
      <form onSubmit={handleSubmit}>
        <h1>Ja tem uma conta ?</h1>
        <span>Entra com email e senha</span>

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          value={email}
          name="email"
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          required
          onChange={handleChange}
          value={password}
        />
        <div className="buttons-container">
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Entrar com Google
          </Button>
          <Button type="submit">Entrar </Button>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
