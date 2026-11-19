import type { DefineComponent } from 'vue';

export interface GaugeTicksDotsSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeTicksDotsSquare: DefineComponent<GaugeTicksDotsSquareProps>;

export default GaugeTicksDotsSquare;
export { GaugeTicksDotsSquare };
