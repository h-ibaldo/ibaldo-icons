import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowLeftDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowLeftDouble: ForwardRefExoticComponent<ArrowLeftDoubleProps & RefAttributes<SVGSVGElement>>;

export default ArrowLeftDouble;
export { ArrowLeftDouble };
