import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserChartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserChart: ForwardRefExoticComponent<BrowserChartProps & RefAttributes<SVGSVGElement>>;

export default BrowserChart;
export { BrowserChart };
