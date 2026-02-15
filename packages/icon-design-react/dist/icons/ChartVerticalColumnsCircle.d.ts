import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartVerticalColumnsCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartVerticalColumnsCircle: ForwardRefExoticComponent<ChartVerticalColumnsCircleProps & RefAttributes<SVGSVGElement>>;

export default ChartVerticalColumnsCircle;
export { ChartVerticalColumnsCircle };
