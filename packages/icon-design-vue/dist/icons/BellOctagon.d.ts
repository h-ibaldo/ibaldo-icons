import type { DefineComponent } from 'vue';

export interface BellOctagonProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellOctagon: DefineComponent<BellOctagonProps>;

export default BellOctagon;
export { BellOctagon };
