import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartVerticalColumnsCircleDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartVerticalColumnsCircleDotted: ForwardRefExoticComponent<ChartVerticalColumnsCircleDottedProps & RefAttributes<SVGSVGElement>>;

export default ChartVerticalColumnsCircleDotted;
export { ChartVerticalColumnsCircleDotted };
