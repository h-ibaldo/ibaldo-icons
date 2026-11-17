import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartTrendUpSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartTrendUpSquare: ForwardRefExoticComponent<ChartTrendUpSquareProps & RefAttributes<SVGSVGElement>>;

export default ChartTrendUpSquare;
export { ChartTrendUpSquare };
