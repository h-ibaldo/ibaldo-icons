import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserChartZigzagProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserChartZigzag: ForwardRefExoticComponent<BrowserChartZigzagProps & RefAttributes<SVGSVGElement>>;

export default BrowserChartZigzag;
export { BrowserChartZigzag };
