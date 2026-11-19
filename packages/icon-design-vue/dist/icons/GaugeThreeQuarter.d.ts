import type { DefineComponent } from 'vue';

export interface GaugeThreeQuarterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeThreeQuarter: DefineComponent<GaugeThreeQuarterProps>;

export default GaugeThreeQuarter;
export { GaugeThreeQuarter };
