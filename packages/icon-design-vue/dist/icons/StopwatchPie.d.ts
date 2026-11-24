import type { DefineComponent } from 'vue';

export interface StopwatchPieProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchPie: DefineComponent<StopwatchPieProps>;

export default StopwatchPie;
export { StopwatchPie };
