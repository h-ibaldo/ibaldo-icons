import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartTrendUpSquarePlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartTrendUpSquarePlus: ForwardRefExoticComponent<ChartTrendUpSquarePlusProps & RefAttributes<SVGSVGElement>>;

export default ChartTrendUpSquarePlus;
export { ChartTrendUpSquarePlus };
