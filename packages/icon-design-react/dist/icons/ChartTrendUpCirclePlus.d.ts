import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartTrendUpCirclePlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartTrendUpCirclePlus: ForwardRefExoticComponent<ChartTrendUpCirclePlusProps & RefAttributes<SVGSVGElement>>;

export default ChartTrendUpCirclePlus;
export { ChartTrendUpCirclePlus };
