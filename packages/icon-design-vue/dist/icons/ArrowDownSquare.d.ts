import type { DefineComponent } from 'vue';

export interface ArrowDownSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowDownSquare: DefineComponent<ArrowDownSquareProps>;

export default ArrowDownSquare;
export { ArrowDownSquare };
