import type { DefineComponent } from 'vue';

export interface GaugeArcSemicircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeArcSemicircle: DefineComponent<GaugeArcSemicircleProps>;

export default GaugeArcSemicircle;
export { GaugeArcSemicircle };
