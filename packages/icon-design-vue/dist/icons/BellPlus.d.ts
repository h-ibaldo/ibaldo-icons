import type { DefineComponent } from 'vue';

export interface BellPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellPlus: DefineComponent<BellPlusProps>;

export default BellPlus;
export { BellPlus };
