import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpLeftSquareInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpLeftSquareIn: ForwardRefExoticComponent<ArrowUpLeftSquareInProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpLeftSquareIn;
export { ArrowUpLeftSquareIn };
