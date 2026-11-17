import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarPeakJoinedBaseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarPeakJoinedBase: ForwardRefExoticComponent<ChartBarPeakJoinedBaseProps & RefAttributes<SVGSVGElement>>;

export default ChartBarPeakJoinedBase;
export { ChartBarPeakJoinedBase };
