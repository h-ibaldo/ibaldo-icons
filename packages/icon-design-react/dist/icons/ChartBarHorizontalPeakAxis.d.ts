import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarHorizontalPeakAxisProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarHorizontalPeakAxis: ForwardRefExoticComponent<ChartBarHorizontalPeakAxisProps & RefAttributes<SVGSVGElement>>;

export default ChartBarHorizontalPeakAxis;
export { ChartBarHorizontalPeakAxis };
