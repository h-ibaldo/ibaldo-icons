import type { DefineComponent } from 'vue';

export interface ClockTriangleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockTriangle: DefineComponent<ClockTriangleProps>;

export default ClockTriangle;
export { ClockTriangle };
