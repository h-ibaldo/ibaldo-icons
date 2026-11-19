import type { DefineComponent } from 'vue';

export interface FormInputProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FormInput: DefineComponent<FormInputProps>;

export default FormInput;
export { FormInput };
