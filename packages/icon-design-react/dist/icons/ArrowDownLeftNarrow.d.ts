import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownLeftNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownLeftNarrow: ForwardRefExoticComponent<ArrowDownLeftNarrowProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownLeftNarrow;
export { ArrowDownLeftNarrow };
