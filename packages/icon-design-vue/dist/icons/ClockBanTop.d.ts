import type { DefineComponent } from 'vue';

export interface ClockBanTopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockBanTop: DefineComponent<ClockBanTopProps>;

export default ClockBanTop;
export { ClockBanTop };
