import type { DefineComponent } from 'vue';

export interface ChartCandlestick2Props {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartCandlestick2: DefineComponent<ChartCandlestick2Props>;

export default ChartCandlestick2;
export { ChartCandlestick2 };
