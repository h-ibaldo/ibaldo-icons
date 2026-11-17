import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartTrendUpSquareMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartTrendUpSquareMinus: ForwardRefExoticComponent<ChartTrendUpSquareMinusProps & RefAttributes<SVGSVGElement>>;

export default ChartTrendUpSquareMinus;
export { ChartTrendUpSquareMinus };
