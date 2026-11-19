import type { DefineComponent } from 'vue';

export interface ChartLineSquareXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartLineSquareX: DefineComponent<ChartLineSquareXProps>;

export default ChartLineSquareX;
export { ChartLineSquareX };
