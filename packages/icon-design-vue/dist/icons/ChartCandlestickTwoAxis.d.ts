import type { DefineComponent } from 'vue';

export interface ChartCandlestickTwoAxisProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartCandlestickTwoAxis: DefineComponent<ChartCandlestickTwoAxisProps>;

export default ChartCandlestickTwoAxis;
export { ChartCandlestickTwoAxis };
