import type { DefineComponent } from 'vue';

export interface GaugeTeardropArchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeTeardropArch: DefineComponent<GaugeTeardropArchProps>;

export default GaugeTeardropArch;
export { GaugeTeardropArch };
