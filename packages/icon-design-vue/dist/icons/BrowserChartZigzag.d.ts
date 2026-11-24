import type { DefineComponent } from 'vue';

export interface BrowserChartZigzagProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserChartZigzag: DefineComponent<BrowserChartZigzagProps>;

export default BrowserChartZigzag;
export { BrowserChartZigzag };
