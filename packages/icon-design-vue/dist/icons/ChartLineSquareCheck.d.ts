import type { DefineComponent } from 'vue';

export interface ChartLineSquareCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartLineSquareCheck: DefineComponent<ChartLineSquareCheckProps>;

export default ChartLineSquareCheck;
export { ChartLineSquareCheck };
