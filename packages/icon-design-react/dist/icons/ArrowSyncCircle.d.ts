import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowSyncCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowSyncCircle: ForwardRefExoticComponent<ArrowSyncCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowSyncCircle;
export { ArrowSyncCircle };
