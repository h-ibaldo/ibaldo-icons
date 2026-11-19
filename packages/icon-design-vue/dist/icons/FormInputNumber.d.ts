import type { DefineComponent } from 'vue';

export interface FormInputNumberProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FormInputNumber: DefineComponent<FormInputNumberProps>;

export default FormInputNumber;
export { FormInputNumber };
