import type { DefineComponent } from 'vue';

export interface FormCheckboxProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FormCheckbox: DefineComponent<FormCheckboxProps>;

export default FormCheckbox;
export { FormCheckbox };
