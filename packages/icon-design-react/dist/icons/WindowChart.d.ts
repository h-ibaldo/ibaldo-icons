import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowChartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowChart: ForwardRefExoticComponent<WindowChartProps & RefAttributes<SVGSVGElement>>;

export default WindowChart;
export { WindowChart };
