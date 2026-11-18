import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockSquare: ForwardRefExoticComponent<ClockSquareProps & RefAttributes<SVGSVGElement>>;

export default ClockSquare;
export { ClockSquare };
