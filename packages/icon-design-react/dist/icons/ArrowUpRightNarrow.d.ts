import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpRightNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpRightNarrow: ForwardRefExoticComponent<ArrowUpRightNarrowProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpRightNarrow;
export { ArrowUpRightNarrow };
