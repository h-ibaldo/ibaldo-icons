import type { DefineComponent } from 'vue';

export interface StopSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopSquare: DefineComponent<StopSquareProps>;

export default StopSquare;
export { StopSquare };
