import type { DefineComponent } from 'vue';

export interface HandTapClockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandTapClock: DefineComponent<HandTapClockProps>;

export default HandTapClock;
export { HandTapClock };
