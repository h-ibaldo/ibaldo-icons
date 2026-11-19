import type { DefineComponent } from 'vue';

export interface BellOffFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellOffFlat: DefineComponent<BellOffFlatProps>;

export default BellOffFlat;
export { BellOffFlat };
