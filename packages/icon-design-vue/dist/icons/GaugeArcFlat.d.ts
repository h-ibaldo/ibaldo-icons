import type { DefineComponent } from 'vue';

export interface GaugeArcFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeArcFlat: DefineComponent<GaugeArcFlatProps>;

export default GaugeArcFlat;
export { GaugeArcFlat };
