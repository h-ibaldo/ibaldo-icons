import type { DefineComponent } from 'vue';

export interface BellDotFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellDotFlat: DefineComponent<BellDotFlatProps>;

export default BellDotFlat;
export { BellDotFlat };
