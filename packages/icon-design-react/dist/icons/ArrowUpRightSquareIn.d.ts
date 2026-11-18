import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpRightSquareInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpRightSquareIn: ForwardRefExoticComponent<ArrowUpRightSquareInProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpRightSquareIn;
export { ArrowUpRightSquareIn };
