import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpRightDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpRightDouble: ForwardRefExoticComponent<ArrowUpRightDoubleProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpRightDouble;
export { ArrowUpRightDouble };
