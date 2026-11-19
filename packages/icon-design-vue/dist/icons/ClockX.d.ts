import type { DefineComponent } from 'vue';

export interface ClockXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockX: DefineComponent<ClockXProps>;

export default ClockX;
export { ClockX };
