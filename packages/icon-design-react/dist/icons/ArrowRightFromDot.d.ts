import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRightFromDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRightFromDot: ForwardRefExoticComponent<ArrowRightFromDotProps & RefAttributes<SVGSVGElement>>;

export default ArrowRightFromDot;
export { ArrowRightFromDot };
