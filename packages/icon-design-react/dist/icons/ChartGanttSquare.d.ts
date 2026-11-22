import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartGanttSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartGanttSquare: ForwardRefExoticComponent<ChartGanttSquareProps & RefAttributes<SVGSVGElement>>;

export default ChartGanttSquare;
export { ChartGanttSquare };
