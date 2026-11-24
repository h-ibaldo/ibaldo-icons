import type { DefineComponent } from 'vue';

export interface BellPlusDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellPlusDash: DefineComponent<BellPlusDashProps>;

export default BellPlusDash;
export { BellPlusDash };
