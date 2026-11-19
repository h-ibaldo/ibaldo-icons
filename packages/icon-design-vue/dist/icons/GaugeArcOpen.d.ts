import type { DefineComponent } from 'vue';

export interface GaugeArcOpenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeArcOpen: DefineComponent<GaugeArcOpenProps>;

export default GaugeArcOpen;
export { GaugeArcOpen };
