import type { DefineComponent } from 'vue';

export interface FormCheckboxLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FormCheckboxLarge: DefineComponent<FormCheckboxLargeProps>;

export default FormCheckboxLarge;
export { FormCheckboxLarge };
