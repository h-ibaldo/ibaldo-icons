import type { DefineComponent } from 'vue';

export interface StopwatchPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchPlus: DefineComponent<StopwatchPlusProps>;

export default StopwatchPlus;
export { StopwatchPlus };
