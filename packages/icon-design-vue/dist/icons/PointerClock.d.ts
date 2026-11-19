import type { DefineComponent } from 'vue';

export interface PointerClockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PointerClock: DefineComponent<PointerClockProps>;

export default PointerClock;
export { PointerClock };
