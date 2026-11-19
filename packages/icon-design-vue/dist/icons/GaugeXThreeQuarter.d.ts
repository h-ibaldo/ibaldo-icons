import type { DefineComponent } from 'vue';

export interface GaugeXThreeQuarterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeXThreeQuarter: DefineComponent<GaugeXThreeQuarterProps>;

export default GaugeXThreeQuarter;
export { GaugeXThreeQuarter };
