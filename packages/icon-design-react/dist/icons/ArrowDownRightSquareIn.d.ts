import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownRightSquareInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownRightSquareIn: ForwardRefExoticComponent<ArrowDownRightSquareInProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownRightSquareIn;
export { ArrowDownRightSquareIn };
