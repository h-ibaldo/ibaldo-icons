import type { DefineComponent } from 'vue';

export interface StopwatchPlusBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchPlusBare: DefineComponent<StopwatchPlusBareProps>;

export default StopwatchPlusBare;
export { StopwatchPlusBare };
