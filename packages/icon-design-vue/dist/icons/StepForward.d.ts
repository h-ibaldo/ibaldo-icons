import type { DefineComponent } from 'vue';

export interface StepForwardProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StepForward: DefineComponent<StepForwardProps>;

export default StepForward;
export { StepForward };
