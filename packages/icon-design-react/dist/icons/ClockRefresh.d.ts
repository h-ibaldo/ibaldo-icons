import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockRefreshProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockRefresh: ForwardRefExoticComponent<ClockRefreshProps & RefAttributes<SVGSVGElement>>;

export default ClockRefresh;
export { ClockRefresh };
