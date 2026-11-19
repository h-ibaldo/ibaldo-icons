import type { DefineComponent } from 'vue';

export interface FormDropdownProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FormDropdown: DefineComponent<FormDropdownProps>;

export default FormDropdown;
export { FormDropdown };
