import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpLeftCircleOutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpLeftCircleOut: ForwardRefExoticComponent<ArrowUpLeftCircleOutProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpLeftCircleOut;
export { ArrowUpLeftCircleOut };
