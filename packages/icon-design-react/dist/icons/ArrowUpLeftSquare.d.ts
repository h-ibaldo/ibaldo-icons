import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpLeftSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpLeftSquare: ForwardRefExoticComponent<ArrowUpLeftSquareProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpLeftSquare;
export { ArrowUpLeftSquare };
