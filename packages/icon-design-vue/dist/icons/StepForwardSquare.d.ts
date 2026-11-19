import type { DefineComponent } from 'vue';

export interface StepForwardSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StepForwardSquare: DefineComponent<StepForwardSquareProps>;

export default StepForwardSquare;
export { StepForwardSquare };
