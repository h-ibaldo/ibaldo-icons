import type { DefineComponent } from 'vue';

export interface BurstSkewedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BurstSkewed: DefineComponent<BurstSkewedProps>;

export default BurstSkewed;
export { BurstSkewed };
