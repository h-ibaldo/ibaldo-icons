import type { DefineComponent } from 'vue';

export interface FormDropdownSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FormDropdownSlim: DefineComponent<FormDropdownSlimProps>;

export default FormDropdownSlim;
export { FormDropdownSlim };
