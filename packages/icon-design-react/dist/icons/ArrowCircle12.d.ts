import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCircle12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCircle12: ForwardRefExoticComponent<ArrowCircle12Props & RefAttributes<SVGSVGElement>>;

export default ArrowCircle12;
export { ArrowCircle12 };
