import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartTrendUpSquareXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartTrendUpSquareX: ForwardRefExoticComponent<ChartTrendUpSquareXProps & RefAttributes<SVGSVGElement>>;

export default ChartTrendUpSquareX;
export { ChartTrendUpSquareX };
