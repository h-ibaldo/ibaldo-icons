import type { DefineComponent } from 'vue';

export interface SkipBackSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SkipBackSquare: DefineComponent<SkipBackSquareProps>;

export default SkipBackSquare;
export { SkipBackSquare };
