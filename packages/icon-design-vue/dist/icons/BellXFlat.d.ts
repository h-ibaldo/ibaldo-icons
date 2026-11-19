import type { DefineComponent } from 'vue';

export interface BellXFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellXFlat: DefineComponent<BellXFlatProps>;

export default BellXFlat;
export { BellXFlat };
