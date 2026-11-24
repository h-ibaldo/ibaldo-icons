import type { DefineComponent } from 'vue';

export interface SquareStackCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareStackCircle: DefineComponent<SquareStackCircleProps>;

export default SquareStackCircle;
export { SquareStackCircle };
