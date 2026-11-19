import type { DefineComponent } from 'vue';

export interface AtClockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtClock: DefineComponent<AtClockProps>;

export default AtClock;
export { AtClock };
