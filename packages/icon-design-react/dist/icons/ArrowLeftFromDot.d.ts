import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowLeftFromDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowLeftFromDot: ForwardRefExoticComponent<ArrowLeftFromDotProps & RefAttributes<SVGSVGElement>>;

export default ArrowLeftFromDot;
export { ArrowLeftFromDot };
