import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowsHexagon1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowsHexagon1: ForwardRefExoticComponent<ArrowsHexagon1Props & RefAttributes<SVGSVGElement>>;

export default ArrowsHexagon1;
export { ArrowsHexagon1 };
