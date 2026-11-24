import type { DefineComponent } from 'vue';

export interface BrowserChartArrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserChartArrow: DefineComponent<BrowserChartArrowProps>;

export default BrowserChartArrow;
export { BrowserChartArrow };
