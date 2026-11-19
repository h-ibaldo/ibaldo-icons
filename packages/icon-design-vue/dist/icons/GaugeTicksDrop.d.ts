import type { DefineComponent } from 'vue';

export interface GaugeTicksDropProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeTicksDrop: DefineComponent<GaugeTicksDropProps>;

export default GaugeTicksDrop;
export { GaugeTicksDrop };
