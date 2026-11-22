import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartGanttBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartGanttBare: ForwardRefExoticComponent<ChartGanttBareProps & RefAttributes<SVGSVGElement>>;

export default ChartGanttBare;
export { ChartGanttBare };
