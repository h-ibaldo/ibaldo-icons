import type { DefineComponent } from 'vue';

export interface SquareStackDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareStackDashed: DefineComponent<SquareStackDashedProps>;

export default SquareStackDashed;
export { SquareStackDashed };
