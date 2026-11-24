import type { DefineComponent } from 'vue';

export interface TimerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Timer: DefineComponent<TimerProps>;

export default Timer;
export { Timer };
