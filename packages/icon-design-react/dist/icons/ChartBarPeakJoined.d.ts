import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarPeakJoinedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarPeakJoined: ForwardRefExoticComponent<ChartBarPeakJoinedProps & RefAttributes<SVGSVGElement>>;

export default ChartBarPeakJoined;
export { ChartBarPeakJoined };
