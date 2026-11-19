import type { DefineComponent } from 'vue';

export interface ChartCandlestickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartCandlestick: DefineComponent<ChartCandlestickProps>;

export default ChartCandlestick;
export { ChartCandlestick };
