import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartVerticalColumnsRectangleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartVerticalColumnsRectangle: ForwardRefExoticComponent<ChartVerticalColumnsRectangleProps & RefAttributes<SVGSVGElement>>;

export default ChartVerticalColumnsRectangle;
export { ChartVerticalColumnsRectangle };
