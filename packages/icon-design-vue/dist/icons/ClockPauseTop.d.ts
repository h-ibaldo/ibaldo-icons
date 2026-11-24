import type { DefineComponent } from 'vue';

export interface ClockPauseTopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockPauseTop: DefineComponent<ClockPauseTopProps>;

export default ClockPauseTop;
export { ClockPauseTop };
