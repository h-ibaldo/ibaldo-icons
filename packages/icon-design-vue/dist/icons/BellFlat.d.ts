import type { DefineComponent } from 'vue';

export interface BellFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellFlat: DefineComponent<BellFlatProps>;

export default BellFlat;
export { BellFlat };
