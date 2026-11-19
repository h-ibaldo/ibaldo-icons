import type { DefineComponent } from 'vue';

export interface SquareStackPlusCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareStackPlusCircle: DefineComponent<SquareStackPlusCircleProps>;

export default SquareStackPlusCircle;
export { SquareStackPlusCircle };
