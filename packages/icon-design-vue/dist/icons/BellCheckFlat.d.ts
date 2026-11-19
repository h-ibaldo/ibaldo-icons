import type { DefineComponent } from 'vue';

export interface BellCheckFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellCheckFlat: DefineComponent<BellCheckFlatProps>;

export default BellCheckFlat;
export { BellCheckFlat };
