import type { DefineComponent } from 'vue';

export interface StepBackCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StepBackCircle: DefineComponent<StepBackCircleProps>;

export default StepBackCircle;
export { StepBackCircle };
