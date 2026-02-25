import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCircle42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCircle42: ForwardRefExoticComponent<ArrowCircle42Props & RefAttributes<SVGSVGElement>>;

export default ArrowCircle42;
export { ArrowCircle42 };
