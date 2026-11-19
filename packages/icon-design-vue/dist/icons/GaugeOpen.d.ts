import type { DefineComponent } from 'vue';

export interface GaugeOpenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeOpen: DefineComponent<GaugeOpenProps>;

export default GaugeOpen;
export { GaugeOpen };
