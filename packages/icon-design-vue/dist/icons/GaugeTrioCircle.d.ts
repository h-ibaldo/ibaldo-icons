import type { DefineComponent } from 'vue';

export interface GaugeTrioCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeTrioCircle: DefineComponent<GaugeTrioCircleProps>;

export default GaugeTrioCircle;
export { GaugeTrioCircle };
