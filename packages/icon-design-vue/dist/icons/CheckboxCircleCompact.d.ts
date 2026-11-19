import type { DefineComponent } from 'vue';

export interface CheckboxCircleCompactProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckboxCircleCompact: DefineComponent<CheckboxCircleCompactProps>;

export default CheckboxCircleCompact;
export { CheckboxCircleCompact };
