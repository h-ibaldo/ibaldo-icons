import type { DefineComponent } from 'vue';

export interface ClockSnoozeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockSnooze: DefineComponent<ClockSnoozeProps>;

export default ClockSnooze;
export { ClockSnooze };
