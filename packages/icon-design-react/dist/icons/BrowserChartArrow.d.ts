import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserChartArrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserChartArrow: ForwardRefExoticComponent<BrowserChartArrowProps & RefAttributes<SVGSVGElement>>;

export default BrowserChartArrow;
export { BrowserChartArrow };
