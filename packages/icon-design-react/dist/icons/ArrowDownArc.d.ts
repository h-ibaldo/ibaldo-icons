import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownArcProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownArc: ForwardRefExoticComponent<ArrowDownArcProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownArc;
export { ArrowDownArc };
