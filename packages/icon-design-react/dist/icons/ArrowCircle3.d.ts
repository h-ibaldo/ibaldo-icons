import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCircle3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCircle3: ForwardRefExoticComponent<ArrowCircle3Props & RefAttributes<SVGSVGElement>>;

export default ArrowCircle3;
export { ArrowCircle3 };
