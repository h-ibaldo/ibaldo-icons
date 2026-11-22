import type { DefineComponent } from 'vue';

export interface ArrowDiagonalInProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowDiagonalIn: DefineComponent<ArrowDiagonalInProps>;

export default ArrowDiagonalIn;
export { ArrowDiagonalIn };
