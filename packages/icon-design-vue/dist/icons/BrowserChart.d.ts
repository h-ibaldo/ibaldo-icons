import type { DefineComponent } from 'vue';

export interface BrowserChartProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserChart: DefineComponent<BrowserChartProps>;

export default BrowserChart;
export { BrowserChart };
