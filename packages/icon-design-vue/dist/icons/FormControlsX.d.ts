import type { DefineComponent } from 'vue';

export interface FormControlsXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FormControlsX: DefineComponent<FormControlsXProps>;

export default FormControlsX;
export { FormControlsX };
