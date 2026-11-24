import type { DefineComponent } from 'vue';

export interface StopwatchMinusBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchMinusBare: DefineComponent<StopwatchMinusBareProps>;

export default StopwatchMinusBare;
export { StopwatchMinusBare };
