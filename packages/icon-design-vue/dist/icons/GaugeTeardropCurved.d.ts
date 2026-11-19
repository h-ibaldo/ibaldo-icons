import type { DefineComponent } from 'vue';

export interface GaugeTeardropCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeTeardropCurved: DefineComponent<GaugeTeardropCurvedProps>;

export default GaugeTeardropCurved;
export { GaugeTeardropCurved };
