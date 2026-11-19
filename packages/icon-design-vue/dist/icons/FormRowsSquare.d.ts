import type { DefineComponent } from 'vue';

export interface FormRowsSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FormRowsSquare: DefineComponent<FormRowsSquareProps>;

export default FormRowsSquare;
export { FormRowsSquare };
