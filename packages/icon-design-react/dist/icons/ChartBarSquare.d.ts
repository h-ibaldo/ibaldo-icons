import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarSquare: ForwardRefExoticComponent<ChartBarSquareProps & RefAttributes<SVGSVGElement>>;

export default ChartBarSquare;
export { ChartBarSquare };
