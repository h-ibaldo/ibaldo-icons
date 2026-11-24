import type { DefineComponent } from 'vue';

export interface ClockDottedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockDotted: DefineComponent<ClockDottedProps>;

export default ClockDotted;
export { ClockDotted };
