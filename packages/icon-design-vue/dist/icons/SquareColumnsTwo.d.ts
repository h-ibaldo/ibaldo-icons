import type { DefineComponent } from 'vue';

export interface SquareColumnsTwoProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareColumnsTwo: DefineComponent<SquareColumnsTwoProps>;

export default SquareColumnsTwo;
export { SquareColumnsTwo };
