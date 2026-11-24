import type { DefineComponent } from 'vue';

export interface ClockSnoozeTopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockSnoozeTop: DefineComponent<ClockSnoozeTopProps>;

export default ClockSnoozeTop;
export { ClockSnoozeTop };
