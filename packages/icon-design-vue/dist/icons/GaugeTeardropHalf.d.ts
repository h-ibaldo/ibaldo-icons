import type { DefineComponent } from 'vue';

export interface GaugeTeardropHalfProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeTeardropHalf: DefineComponent<GaugeTeardropHalfProps>;

export default GaugeTeardropHalf;
export { GaugeTeardropHalf };
