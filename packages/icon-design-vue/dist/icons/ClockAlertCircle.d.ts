import type { DefineComponent } from 'vue';

export interface ClockAlertCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockAlertCircle: DefineComponent<ClockAlertCircleProps>;

export default ClockAlertCircle;
export { ClockAlertCircle };
