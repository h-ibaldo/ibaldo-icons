import type { DefineComponent } from 'vue';

export interface BagTaperedDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BagTaperedDots: DefineComponent<BagTaperedDotsProps>;

export default BagTaperedDots;
export { BagTaperedDots };
