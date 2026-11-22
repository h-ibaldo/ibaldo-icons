import type { DefineComponent } from 'vue';

export interface ArrowDiagonalOutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowDiagonalOut: DefineComponent<ArrowDiagonalOutProps>;

export default ArrowDiagonalOut;
export { ArrowDiagonalOut };
