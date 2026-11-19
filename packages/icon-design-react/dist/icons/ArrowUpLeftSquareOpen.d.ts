import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpLeftSquareOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpLeftSquareOpen: ForwardRefExoticComponent<ArrowUpLeftSquareOpenProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpLeftSquareOpen;
export { ArrowUpLeftSquareOpen };
