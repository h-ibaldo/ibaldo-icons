import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCircle32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCircle32: ForwardRefExoticComponent<ArrowCircle32Props & RefAttributes<SVGSVGElement>>;

export default ArrowCircle32;
export { ArrowCircle32 };
