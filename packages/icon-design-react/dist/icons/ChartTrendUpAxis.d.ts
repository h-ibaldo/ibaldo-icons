import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartTrendUpAxisProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartTrendUpAxis: ForwardRefExoticComponent<ChartTrendUpAxisProps & RefAttributes<SVGSVGElement>>;

export default ChartTrendUpAxis;
export { ChartTrendUpAxis };
