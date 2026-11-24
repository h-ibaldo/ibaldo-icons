import type { DefineComponent } from 'vue';

export interface FormDropdownExpandedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FormDropdownExpanded: DefineComponent<FormDropdownExpandedProps>;

export default FormDropdownExpanded;
export { FormDropdownExpanded };
