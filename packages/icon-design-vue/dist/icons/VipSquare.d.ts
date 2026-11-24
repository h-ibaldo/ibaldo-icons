import type { DefineComponent } from 'vue';

export interface VipSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VipSquare: DefineComponent<VipSquareProps>;

export default VipSquare;
export { VipSquare };
