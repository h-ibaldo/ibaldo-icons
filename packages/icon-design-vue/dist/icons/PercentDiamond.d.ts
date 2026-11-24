import type { DefineComponent } from 'vue';

export interface PercentDiamondProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PercentDiamond: DefineComponent<PercentDiamondProps>;

export default PercentDiamond;
export { PercentDiamond };
