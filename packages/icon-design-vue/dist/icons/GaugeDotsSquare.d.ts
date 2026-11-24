import type { DefineComponent } from 'vue';

export interface GaugeDotsSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeDotsSquare: DefineComponent<GaugeDotsSquareProps>;

export default GaugeDotsSquare;
export { GaugeDotsSquare };
