import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownNarrow: ForwardRefExoticComponent<ArrowDownNarrowProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownNarrow;
export { ArrowDownNarrow };
