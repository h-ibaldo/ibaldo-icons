import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartTrendUpCircleXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartTrendUpCircleX: ForwardRefExoticComponent<ChartTrendUpCircleXProps & RefAttributes<SVGSVGElement>>;

export default ChartTrendUpCircleX;
export { ChartTrendUpCircleX };
