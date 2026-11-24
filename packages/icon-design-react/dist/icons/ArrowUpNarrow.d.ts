import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpNarrow: ForwardRefExoticComponent<ArrowUpNarrowProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpNarrow;
export { ArrowUpNarrow };
