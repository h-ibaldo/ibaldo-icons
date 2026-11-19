import type { DefineComponent } from 'vue';

export interface SquareStackOverlapProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareStackOverlap: DefineComponent<SquareStackOverlapProps>;

export default SquareStackOverlap;
export { SquareStackOverlap };
