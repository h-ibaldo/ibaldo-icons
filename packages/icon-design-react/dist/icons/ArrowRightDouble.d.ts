import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRightDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRightDouble: ForwardRefExoticComponent<ArrowRightDoubleProps & RefAttributes<SVGSVGElement>>;

export default ArrowRightDouble;
export { ArrowRightDouble };
