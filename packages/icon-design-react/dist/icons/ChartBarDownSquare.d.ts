import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarDownSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarDownSquare: ForwardRefExoticComponent<ChartBarDownSquareProps & RefAttributes<SVGSVGElement>>;

export default ChartBarDownSquare;
export { ChartBarDownSquare };
