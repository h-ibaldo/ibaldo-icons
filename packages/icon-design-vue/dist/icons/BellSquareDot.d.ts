import type { DefineComponent } from 'vue';

export interface BellSquareDotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellSquareDot: DefineComponent<BellSquareDotProps>;

export default BellSquareDot;
export { BellSquareDot };
