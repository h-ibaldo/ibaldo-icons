import type { DefineComponent } from 'vue';

export interface ArrowUpSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowUpSquare: DefineComponent<ArrowUpSquareProps>;

export default ArrowUpSquare;
export { ArrowUpSquare };
