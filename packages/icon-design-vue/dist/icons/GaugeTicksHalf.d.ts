import type { DefineComponent } from 'vue';

export interface GaugeTicksHalfProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeTicksHalf: DefineComponent<GaugeTicksHalfProps>;

export default GaugeTicksHalf;
export { GaugeTicksHalf };
