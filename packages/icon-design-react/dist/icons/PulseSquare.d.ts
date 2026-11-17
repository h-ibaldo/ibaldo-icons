import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PulseSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PulseSquare: ForwardRefExoticComponent<PulseSquareProps & RefAttributes<SVGSVGElement>>;

export default PulseSquare;
export { PulseSquare };
