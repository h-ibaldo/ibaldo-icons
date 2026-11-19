import type { DefineComponent } from 'vue';

export interface GaugeTicksProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeTicks: DefineComponent<GaugeTicksProps>;

export default GaugeTicks;
export { GaugeTicks };
