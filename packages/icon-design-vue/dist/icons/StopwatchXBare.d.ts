import type { DefineComponent } from 'vue';

export interface StopwatchXBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchXBare: DefineComponent<StopwatchXBareProps>;

export default StopwatchXBare;
export { StopwatchXBare };
