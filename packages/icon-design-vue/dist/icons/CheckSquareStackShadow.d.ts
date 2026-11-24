import type { DefineComponent } from 'vue';

export interface CheckSquareStackShadowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckSquareStackShadow: DefineComponent<CheckSquareStackShadowProps>;

export default CheckSquareStackShadow;
export { CheckSquareStackShadow };
