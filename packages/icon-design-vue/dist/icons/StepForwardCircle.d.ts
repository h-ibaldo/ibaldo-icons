import type { DefineComponent } from 'vue';

export interface StepForwardCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StepForwardCircle: DefineComponent<StepForwardCircleProps>;

export default StepForwardCircle;
export { StepForwardCircle };
