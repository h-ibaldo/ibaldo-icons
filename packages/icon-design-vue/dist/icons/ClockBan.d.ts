import type { DefineComponent } from 'vue';

export interface ClockBanProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockBan: DefineComponent<ClockBanProps>;

export default ClockBan;
export { ClockBan };
