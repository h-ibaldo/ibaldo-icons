import type { DefineComponent } from 'vue';

export interface GaugeArcDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeArcDashed: DefineComponent<GaugeArcDashedProps>;

export default GaugeArcDashed;
export { GaugeArcDashed };
