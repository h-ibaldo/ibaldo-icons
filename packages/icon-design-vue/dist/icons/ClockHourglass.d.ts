import type { DefineComponent } from 'vue';

export interface ClockHourglassProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockHourglass: DefineComponent<ClockHourglassProps>;

export default ClockHourglass;
export { ClockHourglass };
