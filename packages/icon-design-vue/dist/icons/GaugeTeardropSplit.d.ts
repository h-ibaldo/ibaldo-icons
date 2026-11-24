import type { DefineComponent } from 'vue';

export interface GaugeTeardropSplitProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeTeardropSplit: DefineComponent<GaugeTeardropSplitProps>;

export default GaugeTeardropSplit;
export { GaugeTeardropSplit };
