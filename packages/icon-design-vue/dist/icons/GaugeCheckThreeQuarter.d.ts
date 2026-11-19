import type { DefineComponent } from 'vue';

export interface GaugeCheckThreeQuarterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeCheckThreeQuarter: DefineComponent<GaugeCheckThreeQuarterProps>;

export default GaugeCheckThreeQuarter;
export { GaugeCheckThreeQuarter };
