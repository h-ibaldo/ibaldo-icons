import type { DefineComponent } from 'vue';

export interface BellRingFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellRingFlat: DefineComponent<BellRingFlatProps>;

export default BellRingFlat;
export { BellRingFlat };
