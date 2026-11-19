import type { DefineComponent } from 'vue';

export interface FormRowsCheckboxProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FormRowsCheckbox: DefineComponent<FormRowsCheckboxProps>;

export default FormRowsCheckbox;
export { FormRowsCheckbox };
