import type { DefineComponent } from 'vue';

export interface GaugeTicksFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeTicksFlat: DefineComponent<GaugeTicksFlatProps>;

export default GaugeTicksFlat;
export { GaugeTicksFlat };
