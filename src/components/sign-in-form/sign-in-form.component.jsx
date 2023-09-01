import {
  signInWithGoogePopup,
  createUserDocumentFromAuth,
} from "../../firebase/utilits";
import { UserContext } from "../../context/user.context";
import { useContext } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";


const SignIn = () => {
  const { setCurrentUser } = useContext(UserContext);

  const signInWithGoogle = async () => {
    const { user } = await signInWithGoogePopup();
    setCurrentUser(user)
     await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <div>
        <h1>Ja tem uma conta</h1>
        <p>Entra com email e senha</p>
        {/* <FormInput label='Email' type='email' required /> */}
        {/* <FormInput label='Password' type='password'required /> */}
      </div>
      <Button buttonType ="google" onClick={signInWithGoogle}>Entrar com Google</Button>
    </div>
  );
};
export default SignIn;
