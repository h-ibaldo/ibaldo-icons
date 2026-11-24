import type { DefineComponent } from 'vue';

export interface DotsDiamondProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DotsDiamond: DefineComponent<DotsDiamondProps>;

export default DotsDiamond;
export { DotsDiamond };
