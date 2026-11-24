import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChalkboardChartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChalkboardChart: ForwardRefExoticComponent<ChalkboardChartProps & RefAttributes<SVGSVGElement>>;

export default ChalkboardChart;
export { ChalkboardChart };
