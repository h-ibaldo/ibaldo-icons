import type { DefineComponent } from 'vue';

export interface ClockDotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockDot: DefineComponent<ClockDotProps>;

export default ClockDot;
export { ClockDot };
