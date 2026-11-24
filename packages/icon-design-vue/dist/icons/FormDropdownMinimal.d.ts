import type { DefineComponent } from 'vue';

export interface FormDropdownMinimalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FormDropdownMinimal: DefineComponent<FormDropdownMinimalProps>;

export default FormDropdownMinimal;
export { FormDropdownMinimal };
