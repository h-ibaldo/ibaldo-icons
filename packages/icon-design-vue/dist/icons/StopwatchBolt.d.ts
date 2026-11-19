import type { DefineComponent } from 'vue';

export interface StopwatchBoltProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchBolt: DefineComponent<StopwatchBoltProps>;

export default StopwatchBolt;
export { StopwatchBolt };
