import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles.jsx";

export const BUTTONS_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTONS_TYPE_CLASSES.base) =>
  ({
    [BUTTONS_TYPE_CLASSES.base]: BaseButton,
    [BUTTONS_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTONS_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);
const Button = ({ children, buttonType, ...othersProps }) => {

  const CustomButton = getButton(buttonType);

  return <CustomButton {...othersProps}>{children}</CustomButton>;
};
export default Button;
