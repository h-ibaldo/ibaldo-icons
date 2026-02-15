import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCircle1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCircle1: ForwardRefExoticComponent<ArrowCircle1Props & RefAttributes<SVGSVGElement>>;

export default ArrowCircle1;
export { ArrowCircle1 };
