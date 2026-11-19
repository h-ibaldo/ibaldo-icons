import type { DefineComponent } from 'vue';

export interface ClockAlertTriangleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockAlertTriangle: DefineComponent<ClockAlertTriangleProps>;

export default ClockAlertTriangle;
export { ClockAlertTriangle };
