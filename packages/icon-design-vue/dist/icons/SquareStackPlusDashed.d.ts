import type { DefineComponent } from 'vue';

export interface SquareStackPlusDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareStackPlusDashed: DefineComponent<SquareStackPlusDashedProps>;

export default SquareStackPlusDashed;
export { SquareStackPlusDashed };
