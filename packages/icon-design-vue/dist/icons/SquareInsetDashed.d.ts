import type { DefineComponent } from 'vue';

export interface SquareInsetDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareInsetDashed: DefineComponent<SquareInsetDashedProps>;

export default SquareInsetDashed;
export { SquareInsetDashed };
