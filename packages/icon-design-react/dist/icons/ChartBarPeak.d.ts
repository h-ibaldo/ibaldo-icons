import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarPeakProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarPeak: ForwardRefExoticComponent<ChartBarPeakProps & RefAttributes<SVGSVGElement>>;

export default ChartBarPeak;
export { ChartBarPeak };
