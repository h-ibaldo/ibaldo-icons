import type { DefineComponent } from 'vue';

export interface CheckLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckLarge: DefineComponent<CheckLargeProps>;

export default CheckLarge;
export { CheckLarge };
