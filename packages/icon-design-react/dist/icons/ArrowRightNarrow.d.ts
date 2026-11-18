import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRightNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRightNarrow: ForwardRefExoticComponent<ArrowRightNarrowProps & RefAttributes<SVGSVGElement>>;

export default ArrowRightNarrow;
export { ArrowRightNarrow };
