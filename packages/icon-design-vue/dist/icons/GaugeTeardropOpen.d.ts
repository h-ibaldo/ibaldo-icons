import type { DefineComponent } from 'vue';

export interface GaugeTeardropOpenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeTeardropOpen: DefineComponent<GaugeTeardropOpenProps>;

export default GaugeTeardropOpen;
export { GaugeTeardropOpen };
