import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CompassSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CompassSquare: ForwardRefExoticComponent<CompassSquareProps & RefAttributes<SVGSVGElement>>;

export default CompassSquare;
export { CompassSquare };
