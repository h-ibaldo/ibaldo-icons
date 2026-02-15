import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCircle4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCircle4: ForwardRefExoticComponent<ArrowCircle4Props & RefAttributes<SVGSVGElement>>;

export default ArrowCircle4;
export { ArrowCircle4 };
