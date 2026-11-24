import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellSquare: ForwardRefExoticComponent<BellSquareProps & RefAttributes<SVGSVGElement>>;

export default BellSquare;
export { BellSquare };
