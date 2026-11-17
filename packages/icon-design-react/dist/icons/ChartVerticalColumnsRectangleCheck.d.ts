import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartVerticalColumnsRectangleCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartVerticalColumnsRectangleCheck: ForwardRefExoticComponent<ChartVerticalColumnsRectangleCheckProps & RefAttributes<SVGSVGElement>>;

export default ChartVerticalColumnsRectangleCheck;
export { ChartVerticalColumnsRectangleCheck };
