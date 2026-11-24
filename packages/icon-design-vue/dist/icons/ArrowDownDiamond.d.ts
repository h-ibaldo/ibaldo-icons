import type { DefineComponent } from 'vue';

export interface ArrowDownDiamondProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowDownDiamond: DefineComponent<ArrowDownDiamondProps>;

export default ArrowDownDiamond;
export { ArrowDownDiamond };
