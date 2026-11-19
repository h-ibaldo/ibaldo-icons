import type { DefineComponent } from 'vue';

export interface StopwatchOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchOff: DefineComponent<StopwatchOffProps>;

export default StopwatchOff;
export { StopwatchOff };
