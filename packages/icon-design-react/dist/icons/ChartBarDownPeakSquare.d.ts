import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarDownPeakSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarDownPeakSquare: ForwardRefExoticComponent<ChartBarDownPeakSquareProps & RefAttributes<SVGSVGElement>>;

export default ChartBarDownPeakSquare;
export { ChartBarDownPeakSquare };
