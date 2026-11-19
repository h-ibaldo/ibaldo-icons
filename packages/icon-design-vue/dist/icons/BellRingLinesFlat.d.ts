import type { DefineComponent } from 'vue';

export interface BellRingLinesFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellRingLinesFlat: DefineComponent<BellRingLinesFlatProps>;

export default BellRingLinesFlat;
export { BellRingLinesFlat };
