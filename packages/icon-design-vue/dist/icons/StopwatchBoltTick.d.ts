import type { DefineComponent } from 'vue';

export interface StopwatchBoltTickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchBoltTick: DefineComponent<StopwatchBoltTickProps>;

export default StopwatchBoltTick;
export { StopwatchBoltTick };
