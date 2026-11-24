import type { DefineComponent } from 'vue';

export interface FormControlsPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FormControlsPlus: DefineComponent<FormControlsPlusProps>;

export default FormControlsPlus;
export { FormControlsPlus };
