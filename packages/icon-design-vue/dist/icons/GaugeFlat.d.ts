import type { DefineComponent } from 'vue';

export interface GaugeFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeFlat: DefineComponent<GaugeFlatProps>;

export default GaugeFlat;
export { GaugeFlat };
