import type { DefineComponent } from 'vue';

export interface CheckboxProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Checkbox: DefineComponent<CheckboxProps>;

export default Checkbox;
export { Checkbox };
