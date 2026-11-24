import type { DefineComponent } from 'vue';

export interface GaugeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Gauge: DefineComponent<GaugeProps>;

export default Gauge;
export { Gauge };
