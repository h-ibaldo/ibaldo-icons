import type { DefineComponent } from 'vue';

export interface ClockTicksProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockTicks: DefineComponent<ClockTicksProps>;

export default ClockTicks;
export { ClockTicks };
