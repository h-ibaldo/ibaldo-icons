import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartVerticalColumnsRectangleDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartVerticalColumnsRectangleDot: ForwardRefExoticComponent<ChartVerticalColumnsRectangleDotProps & RefAttributes<SVGSVGElement>>;

export default ChartVerticalColumnsRectangleDot;
export { ChartVerticalColumnsRectangleDot };
