import type { DefineComponent } from 'vue';

export interface SquareStackArrowBendProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareStackArrowBend: DefineComponent<SquareStackArrowBendProps>;

export default SquareStackArrowBend;
export { SquareStackArrowBend };
