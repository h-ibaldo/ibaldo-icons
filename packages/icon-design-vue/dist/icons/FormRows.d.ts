import type { DefineComponent } from 'vue';

export interface FormRowsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FormRows: DefineComponent<FormRowsProps>;

export default FormRows;
export { FormRows };
