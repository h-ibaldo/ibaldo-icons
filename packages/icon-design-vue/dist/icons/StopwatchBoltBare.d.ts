import type { DefineComponent } from 'vue';

export interface StopwatchBoltBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchBoltBare: DefineComponent<StopwatchBoltBareProps>;

export default StopwatchBoltBare;
export { StopwatchBoltBare };
