import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartVerticalColumnsLinesCircleDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartVerticalColumnsLinesCircleDotted: ForwardRefExoticComponent<ChartVerticalColumnsLinesCircleDottedProps & RefAttributes<SVGSVGElement>>;

export default ChartVerticalColumnsLinesCircleDotted;
export { ChartVerticalColumnsLinesCircleDotted };
