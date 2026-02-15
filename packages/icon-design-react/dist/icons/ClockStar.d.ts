import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockStarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockStar: ForwardRefExoticComponent<ClockStarProps & RefAttributes<SVGSVGElement>>;

export default ClockStar;
export { ClockStar };
