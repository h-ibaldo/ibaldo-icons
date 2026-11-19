import type { DefineComponent } from 'vue';

export interface StepBackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StepBack: DefineComponent<StepBackProps>;

export default StepBack;
export { StepBack };
