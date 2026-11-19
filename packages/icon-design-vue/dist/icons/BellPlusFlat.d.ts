import type { DefineComponent } from 'vue';

export interface BellPlusFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellPlusFlat: DefineComponent<BellPlusFlatProps>;

export default BellPlusFlat;
export { BellPlusFlat };
