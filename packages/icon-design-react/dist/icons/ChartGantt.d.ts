import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartGanttProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartGantt: ForwardRefExoticComponent<ChartGanttProps & RefAttributes<SVGSVGElement>>;

export default ChartGantt;
export { ChartGantt };
