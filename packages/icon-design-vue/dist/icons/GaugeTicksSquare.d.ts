import type { DefineComponent } from 'vue';

export interface GaugeTicksSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeTicksSquare: DefineComponent<GaugeTicksSquareProps>;

export default GaugeTicksSquare;
export { GaugeTicksSquare };
