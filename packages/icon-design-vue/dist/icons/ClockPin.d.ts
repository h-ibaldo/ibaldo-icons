import type { DefineComponent } from 'vue';

export interface ClockPinProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockPin: DefineComponent<ClockPinProps>;

export default ClockPin;
export { ClockPin };
