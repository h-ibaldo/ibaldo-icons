import type { DefineComponent } from 'vue';

export interface GaugeArchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeArch: DefineComponent<GaugeArchProps>;

export default GaugeArch;
export { GaugeArch };
