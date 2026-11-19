import type { DefineComponent } from 'vue';

export interface CheckboxCompactProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckboxCompact: DefineComponent<CheckboxCompactProps>;

export default CheckboxCompact;
export { CheckboxCompact };
