import type { DefineComponent } from 'vue';

export interface GaugeTicksSplitProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeTicksSplit: DefineComponent<GaugeTicksSplitProps>;

export default GaugeTicksSplit;
export { GaugeTicksSplit };
