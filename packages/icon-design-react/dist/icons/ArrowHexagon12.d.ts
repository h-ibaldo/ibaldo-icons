import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowHexagon12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowHexagon12: ForwardRefExoticComponent<ArrowHexagon12Props & RefAttributes<SVGSVGElement>>;

export default ArrowHexagon12;
export { ArrowHexagon12 };
