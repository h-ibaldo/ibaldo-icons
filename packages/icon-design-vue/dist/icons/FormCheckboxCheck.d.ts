import type { DefineComponent } from 'vue';

export interface FormCheckboxCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FormCheckboxCheck: DefineComponent<FormCheckboxCheckProps>;

export default FormCheckboxCheck;
export { FormCheckboxCheck };
