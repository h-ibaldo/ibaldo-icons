import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarTrendDownThinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarTrendDownThin: ForwardRefExoticComponent<ChartBarTrendDownThinProps & RefAttributes<SVGSVGElement>>;

export default ChartBarTrendDownThin;
export { ChartBarTrendDownThin };
