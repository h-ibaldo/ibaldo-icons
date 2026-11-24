import type { DefineComponent } from 'vue';

export interface GaugeSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeSquare: DefineComponent<GaugeSquareProps>;

export default GaugeSquare;
export { GaugeSquare };
