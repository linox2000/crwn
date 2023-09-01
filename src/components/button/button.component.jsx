import "./button.styles.scss";

const BUTTONS_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...othersProps }) => {
  return (
    <button
      {...othersProps}
      className={` button-container ${BUTTONS_TYPE_CLASSES[buttonType]} `}
    >
      {children}
    </button>
  );
};
export default Button;
