import type { DefineComponent } from 'vue';

export interface StepBackThickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StepBackThick: DefineComponent<StepBackThickProps>;

export default StepBackThick;
export { StepBackThick };
