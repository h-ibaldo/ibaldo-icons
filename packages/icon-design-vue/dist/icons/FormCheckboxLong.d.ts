import type { DefineComponent } from 'vue';

export interface FormCheckboxLongProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FormCheckboxLong: DefineComponent<FormCheckboxLongProps>;

export default FormCheckboxLong;
export { FormCheckboxLong };
