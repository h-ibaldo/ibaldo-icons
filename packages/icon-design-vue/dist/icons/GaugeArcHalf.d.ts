import type { DefineComponent } from 'vue';

export interface GaugeArcHalfProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeArcHalf: DefineComponent<GaugeArcHalfProps>;

export default GaugeArcHalf;
export { GaugeArcHalf };
