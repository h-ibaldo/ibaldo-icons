import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartTrendUpCircleCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartTrendUpCircleCheck: ForwardRefExoticComponent<ChartTrendUpCircleCheckProps & RefAttributes<SVGSVGElement>>;

export default ChartTrendUpCircleCheck;
export { ChartTrendUpCircleCheck };
