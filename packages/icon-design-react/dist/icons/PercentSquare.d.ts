import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PercentSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PercentSquare: ForwardRefExoticComponent<PercentSquareProps & RefAttributes<SVGSVGElement>>;

export default PercentSquare;
export { PercentSquare };
