import type { DefineComponent } from 'vue';

export interface SquareStackImageDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareStackImageDashed: DefineComponent<SquareStackImageDashedProps>;

export default SquareStackImageDashed;
export { SquareStackImageDashed };
