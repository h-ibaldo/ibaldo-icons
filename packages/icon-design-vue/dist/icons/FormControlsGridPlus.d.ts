import type { DefineComponent } from 'vue';

export interface FormControlsGridPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FormControlsGridPlus: DefineComponent<FormControlsGridPlusProps>;

export default FormControlsGridPlus;
export { FormControlsGridPlus };
