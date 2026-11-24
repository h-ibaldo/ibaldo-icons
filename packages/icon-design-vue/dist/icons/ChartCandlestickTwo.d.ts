import type { DefineComponent } from 'vue';

export interface ChartCandlestickTwoProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartCandlestickTwo: DefineComponent<ChartCandlestickTwoProps>;

export default ChartCandlestickTwo;
export { ChartCandlestickTwo };
