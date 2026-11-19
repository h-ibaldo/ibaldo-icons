import type { DefineComponent } from 'vue';

export interface GaugeTeardropDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeTeardropDashed: DefineComponent<GaugeTeardropDashedProps>;

export default GaugeTeardropDashed;
export { GaugeTeardropDashed };
