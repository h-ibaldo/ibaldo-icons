import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartTrendUpCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartTrendUpCircle: ForwardRefExoticComponent<ChartTrendUpCircleProps & RefAttributes<SVGSVGElement>>;

export default ChartTrendUpCircle;
export { ChartTrendUpCircle };
