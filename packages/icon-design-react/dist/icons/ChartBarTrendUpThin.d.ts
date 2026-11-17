import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarTrendUpThinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarTrendUpThin: ForwardRefExoticComponent<ChartBarTrendUpThinProps & RefAttributes<SVGSVGElement>>;

export default ChartBarTrendUpThin;
export { ChartBarTrendUpThin };
