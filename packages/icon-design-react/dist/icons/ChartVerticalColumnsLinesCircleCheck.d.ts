import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartVerticalColumnsLinesCircleCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartVerticalColumnsLinesCircleCheck: ForwardRefExoticComponent<ChartVerticalColumnsLinesCircleCheckProps & RefAttributes<SVGSVGElement>>;

export default ChartVerticalColumnsLinesCircleCheck;
export { ChartVerticalColumnsLinesCircleCheck };
