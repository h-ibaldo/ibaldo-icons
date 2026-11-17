import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartVerticalColumnsLinesSquareDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartVerticalColumnsLinesSquareDot: ForwardRefExoticComponent<ChartVerticalColumnsLinesSquareDotProps & RefAttributes<SVGSVGElement>>;

export default ChartVerticalColumnsLinesSquareDot;
export { ChartVerticalColumnsLinesSquareDot };
