import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowsHexagon2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowsHexagon2: ForwardRefExoticComponent<ArrowsHexagon2Props & RefAttributes<SVGSVGElement>>;

export default ArrowsHexagon2;
export { ArrowsHexagon2 };
