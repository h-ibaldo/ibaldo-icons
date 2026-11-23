import type { DefineComponent } from 'vue';

export interface ChartQuadrantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartQuadrant: DefineComponent<ChartQuadrantProps>;

export default ChartQuadrant;
export { ChartQuadrant };
