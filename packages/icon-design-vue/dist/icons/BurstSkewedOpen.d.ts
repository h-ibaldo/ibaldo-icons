import type { DefineComponent } from 'vue';

export interface BurstSkewedOpenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BurstSkewedOpen: DefineComponent<BurstSkewedOpenProps>;

export default BurstSkewedOpen;
export { BurstSkewedOpen };
