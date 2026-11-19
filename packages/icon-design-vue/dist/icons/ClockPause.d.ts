import type { DefineComponent } from 'vue';

export interface ClockPauseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockPause: DefineComponent<ClockPauseProps>;

export default ClockPause;
export { ClockPause };
