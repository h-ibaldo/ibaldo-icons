import type { DefineComponent } from 'vue';

export interface BellTiltedFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellTiltedFlat: DefineComponent<BellTiltedFlatProps>;

export default BellTiltedFlat;
export { BellTiltedFlat };
