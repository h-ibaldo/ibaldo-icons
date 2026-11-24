import type { DefineComponent } from 'vue';

export interface CheckSquareStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckSquareStack: DefineComponent<CheckSquareStackProps>;

export default CheckSquareStack;
export { CheckSquareStack };
