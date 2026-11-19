import type { DefineComponent } from 'vue';

export interface StepBackSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StepBackSquare: DefineComponent<StepBackSquareProps>;

export default StepBackSquare;
export { StepBackSquare };
