import type { DefineComponent } from 'vue';

export interface HandClockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandClock: DefineComponent<HandClockProps>;

export default HandClock;
export { HandClock };
