import type { DefineComponent } from 'vue';

export interface GaugeHalfProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeHalf: DefineComponent<GaugeHalfProps>;

export default GaugeHalf;
export { GaugeHalf };
