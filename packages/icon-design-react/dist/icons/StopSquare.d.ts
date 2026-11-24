import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopSquare: ForwardRefExoticComponent<StopSquareProps & RefAttributes<SVGSVGElement>>;

export default StopSquare;
export { StopSquare };
