import type { DefineComponent } from 'vue';

export interface BellClockFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellClockFlat: DefineComponent<BellClockFlatProps>;

export default BellClockFlat;
export { BellClockFlat };
