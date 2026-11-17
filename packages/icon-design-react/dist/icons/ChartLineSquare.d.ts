import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineSquare: ForwardRefExoticComponent<ChartLineSquareProps & RefAttributes<SVGSVGElement>>;

export default ChartLineSquare;
export { ChartLineSquare };
