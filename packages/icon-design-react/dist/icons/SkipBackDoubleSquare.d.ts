import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SkipBackDoubleSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SkipBackDoubleSquare: ForwardRefExoticComponent<SkipBackDoubleSquareProps & RefAttributes<SVGSVGElement>>;

export default SkipBackDoubleSquare;
export { SkipBackDoubleSquare };
