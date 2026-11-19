import type { DefineComponent } from 'vue';

export interface BagFlaredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BagFlared: DefineComponent<BagFlaredProps>;

export default BagFlared;
export { BagFlared };
