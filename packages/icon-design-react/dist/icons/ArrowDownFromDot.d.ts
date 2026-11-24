import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownFromDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownFromDot: ForwardRefExoticComponent<ArrowDownFromDotProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownFromDot;
export { ArrowDownFromDot };
