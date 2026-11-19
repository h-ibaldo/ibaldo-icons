import type { DefineComponent } from 'vue';

export interface GaugeArcProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeArc: DefineComponent<GaugeArcProps>;

export default GaugeArc;
export { GaugeArc };
