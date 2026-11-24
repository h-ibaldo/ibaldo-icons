import type { DefineComponent } from 'vue';

export interface PointerClockStraightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PointerClockStraight: DefineComponent<PointerClockStraightProps>;

export default PointerClockStraight;
export { PointerClockStraight };
