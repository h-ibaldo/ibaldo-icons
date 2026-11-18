import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpDouble: ForwardRefExoticComponent<ArrowUpDoubleProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpDouble;
export { ArrowUpDouble };
