import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartTrendUpSquareArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartTrendUpSquareArrowRight: ForwardRefExoticComponent<ChartTrendUpSquareArrowRightProps & RefAttributes<SVGSVGElement>>;

export default ChartTrendUpSquareArrowRight;
export { ChartTrendUpSquareArrowRight };
