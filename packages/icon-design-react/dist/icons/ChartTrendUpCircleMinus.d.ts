import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartTrendUpCircleMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartTrendUpCircleMinus: ForwardRefExoticComponent<ChartTrendUpCircleMinusProps & RefAttributes<SVGSVGElement>>;

export default ChartTrendUpCircleMinus;
export { ChartTrendUpCircleMinus };
