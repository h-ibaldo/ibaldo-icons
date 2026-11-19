import type { DefineComponent } from 'vue';

export interface BanOctagonProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BanOctagon: DefineComponent<BanOctagonProps>;

export default BanOctagon;
export { BanOctagon };
