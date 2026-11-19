import type { DefineComponent } from 'vue';

export interface StopwatchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Stopwatch: DefineComponent<StopwatchProps>;

export default Stopwatch;
export { Stopwatch };
