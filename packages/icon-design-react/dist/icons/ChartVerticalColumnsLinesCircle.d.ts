import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartVerticalColumnsLinesCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartVerticalColumnsLinesCircle: ForwardRefExoticComponent<ChartVerticalColumnsLinesCircleProps & RefAttributes<SVGSVGElement>>;

export default ChartVerticalColumnsLinesCircle;
export { ChartVerticalColumnsLinesCircle };
