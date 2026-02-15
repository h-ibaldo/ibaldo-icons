import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCircle2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCircle2: ForwardRefExoticComponent<ArrowCircle2Props & RefAttributes<SVGSVGElement>>;

export default ArrowCircle2;
export { ArrowCircle2 };
