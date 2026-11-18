import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownRightDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownRightDouble: ForwardRefExoticComponent<ArrowDownRightDoubleProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownRightDouble;
export { ArrowDownRightDouble };
