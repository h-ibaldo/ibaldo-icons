import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartVerticalColumnsLinesSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartVerticalColumnsLinesSquare: ForwardRefExoticComponent<ChartVerticalColumnsLinesSquareProps & RefAttributes<SVGSVGElement>>;

export default ChartVerticalColumnsLinesSquare;
export { ChartVerticalColumnsLinesSquare };
