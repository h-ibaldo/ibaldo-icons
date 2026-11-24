import type { DefineComponent } from 'vue';

export interface GaugeTicksDenseDropProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeTicksDenseDrop: DefineComponent<GaugeTicksDenseDropProps>;

export default GaugeTicksDenseDrop;
export { GaugeTicksDenseDrop };
