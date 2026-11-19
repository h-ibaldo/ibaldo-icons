import type { DefineComponent } from 'vue';

export interface BellDotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellDot: DefineComponent<BellDotProps>;

export default BellDot;
export { BellDot };
