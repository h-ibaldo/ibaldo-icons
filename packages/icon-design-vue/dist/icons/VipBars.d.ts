import type { DefineComponent } from 'vue';

export interface VipBarsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VipBars: DefineComponent<VipBarsProps>;

export default VipBars;
export { VipBars };
