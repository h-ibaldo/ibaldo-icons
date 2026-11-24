import type { DefineComponent } from 'vue';

export interface ClockXTopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockXTop: DefineComponent<ClockXTopProps>;

export default ClockXTop;
export { ClockXTop };
