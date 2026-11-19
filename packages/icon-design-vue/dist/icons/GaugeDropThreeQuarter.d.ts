import type { DefineComponent } from 'vue';

export interface GaugeDropThreeQuarterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeDropThreeQuarter: DefineComponent<GaugeDropThreeQuarterProps>;

export default GaugeDropThreeQuarter;
export { GaugeDropThreeQuarter };
