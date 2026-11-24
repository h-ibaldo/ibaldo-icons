import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpCircleJoinedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpCircleJoined: ForwardRefExoticComponent<ArrowUpCircleJoinedProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpCircleJoined;
export { ArrowUpCircleJoined };
