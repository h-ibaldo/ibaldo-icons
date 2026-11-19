import type { DefineComponent } from 'vue';

export interface StopwatchNeedleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchNeedle: DefineComponent<StopwatchNeedleProps>;

export default StopwatchNeedle;
export { StopwatchNeedle };
