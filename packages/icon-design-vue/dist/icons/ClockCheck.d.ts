import type { DefineComponent } from 'vue';

export interface ClockCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockCheck: DefineComponent<ClockCheckProps>;

export default ClockCheck;
export { ClockCheck };
