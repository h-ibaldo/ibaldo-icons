import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowsHexagon12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowsHexagon12: ForwardRefExoticComponent<ArrowsHexagon12Props & RefAttributes<SVGSVGElement>>;

export default ArrowsHexagon12;
export { ArrowsHexagon12 };
