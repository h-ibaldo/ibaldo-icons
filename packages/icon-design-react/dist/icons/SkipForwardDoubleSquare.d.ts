import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SkipForwardDoubleSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SkipForwardDoubleSquare: ForwardRefExoticComponent<SkipForwardDoubleSquareProps & RefAttributes<SVGSVGElement>>;

export default SkipForwardDoubleSquare;
export { SkipForwardDoubleSquare };
