import { FormInputLabel, Group, Input } from "./form-input.styles.jsx";

const FormInput = ({ label, ...othersProps }) => {
  return (
    <Group>
      <Input {...othersProps} />
      {label && (
        <FormInputLabel shrink={othersProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
