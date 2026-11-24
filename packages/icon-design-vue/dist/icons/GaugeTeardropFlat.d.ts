import type { DefineComponent } from 'vue';

export interface GaugeTeardropFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeTeardropFlat: DefineComponent<GaugeTeardropFlatProps>;

export default GaugeTeardropFlat;
export { GaugeTeardropFlat };
