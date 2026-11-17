import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartTrendUpSquareDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartTrendUpSquareDot: ForwardRefExoticComponent<ChartTrendUpSquareDotProps & RefAttributes<SVGSVGElement>>;

export default ChartTrendUpSquareDot;
export { ChartTrendUpSquareDot };
