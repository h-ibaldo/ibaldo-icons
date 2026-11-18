import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpLeftSquareOutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpLeftSquareOut: ForwardRefExoticComponent<ArrowUpLeftSquareOutProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpLeftSquareOut;
export { ArrowUpLeftSquareOut };
