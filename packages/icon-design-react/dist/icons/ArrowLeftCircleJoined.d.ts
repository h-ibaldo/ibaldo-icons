import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowLeftCircleJoinedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowLeftCircleJoined: ForwardRefExoticComponent<ArrowLeftCircleJoinedProps & RefAttributes<SVGSVGElement>>;

export default ArrowLeftCircleJoined;
export { ArrowLeftCircleJoined };
