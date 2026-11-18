import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpLeftDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpLeftDouble: ForwardRefExoticComponent<ArrowUpLeftDoubleProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpLeftDouble;
export { ArrowUpLeftDouble };
