import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarPeakJoinedAxisProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarPeakJoinedAxis: ForwardRefExoticComponent<ChartBarPeakJoinedAxisProps & RefAttributes<SVGSVGElement>>;

export default ChartBarPeakJoinedAxis;
export { ChartBarPeakJoinedAxis };
