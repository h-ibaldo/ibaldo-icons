import type { DefineComponent } from 'vue';

export interface FormDropdownDotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FormDropdownDot: DefineComponent<FormDropdownDotProps>;

export default FormDropdownDot;
export { FormDropdownDot };
