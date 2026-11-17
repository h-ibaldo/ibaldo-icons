import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartVerticalColumnsLinesSquarePlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartVerticalColumnsLinesSquarePlus: ForwardRefExoticComponent<ChartVerticalColumnsLinesSquarePlusProps & RefAttributes<SVGSVGElement>>;

export default ChartVerticalColumnsLinesSquarePlus;
export { ChartVerticalColumnsLinesSquarePlus };
