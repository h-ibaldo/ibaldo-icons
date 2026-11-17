import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpFromDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpFromDot: ForwardRefExoticComponent<ArrowUpFromDotProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpFromDot;
export { ArrowUpFromDot };
