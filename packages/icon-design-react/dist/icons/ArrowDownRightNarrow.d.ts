import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownRightNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownRightNarrow: ForwardRefExoticComponent<ArrowDownRightNarrowProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownRightNarrow;
export { ArrowDownRightNarrow };
