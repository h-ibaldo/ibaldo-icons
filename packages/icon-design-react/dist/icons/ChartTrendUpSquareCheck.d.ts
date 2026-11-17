import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartTrendUpSquareCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartTrendUpSquareCheck: ForwardRefExoticComponent<ChartTrendUpSquareCheckProps & RefAttributes<SVGSVGElement>>;

export default ChartTrendUpSquareCheck;
export { ChartTrendUpSquareCheck };
