import type { DefineComponent } from 'vue';

export interface StepForwardThickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StepForwardThick: DefineComponent<StepForwardThickProps>;

export default StepForwardThick;
export { StepForwardThick };
