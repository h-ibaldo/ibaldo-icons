import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareStackSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareStackSquare: ForwardRefExoticComponent<SquareStackSquareProps & RefAttributes<SVGSVGElement>>;

export default SquareStackSquare;
export { SquareStackSquare };
