import type { DefineComponent } from 'vue';

export interface BellClockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellClock: DefineComponent<BellClockProps>;

export default BellClock;
export { BellClock };
