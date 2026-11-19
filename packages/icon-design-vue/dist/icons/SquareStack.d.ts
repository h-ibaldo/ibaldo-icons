import type { DefineComponent } from 'vue';

export interface SquareStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareStack: DefineComponent<SquareStackProps>;

export default SquareStack;
export { SquareStack };
