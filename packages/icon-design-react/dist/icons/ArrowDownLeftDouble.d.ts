import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownLeftDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownLeftDouble: ForwardRefExoticComponent<ArrowDownLeftDoubleProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownLeftDouble;
export { ArrowDownLeftDouble };
