import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCounterclockwiseTenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCounterclockwiseTen: ForwardRefExoticComponent<ArrowCounterclockwiseTenProps & RefAttributes<SVGSVGElement>>;

export default ArrowCounterclockwiseTen;
export { ArrowCounterclockwiseTen };
