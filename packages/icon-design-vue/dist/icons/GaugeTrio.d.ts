import type { DefineComponent } from 'vue';

export interface GaugeTrioProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeTrio: DefineComponent<GaugeTrioProps>;

export default GaugeTrio;
export { GaugeTrio };
