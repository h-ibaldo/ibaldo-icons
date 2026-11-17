import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarHorizontalPeakProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarHorizontalPeak: ForwardRefExoticComponent<ChartBarHorizontalPeakProps & RefAttributes<SVGSVGElement>>;

export default ChartBarHorizontalPeak;
export { ChartBarHorizontalPeak };
