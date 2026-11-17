import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowClockwiseFifteenDoubleChevronProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowClockwiseFifteenDoubleChevron: ForwardRefExoticComponent<ArrowClockwiseFifteenDoubleChevronProps & RefAttributes<SVGSVGElement>>;

export default ArrowClockwiseFifteenDoubleChevron;
export { ArrowClockwiseFifteenDoubleChevron };
