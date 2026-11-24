import type { DefineComponent } from 'vue';

export interface FormControlsCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FormControlsCheck: DefineComponent<FormControlsCheckProps>;

export default FormControlsCheck;
export { FormControlsCheck };
