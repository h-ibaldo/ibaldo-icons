import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartVerticalColumnsCircleCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartVerticalColumnsCircleCheck: ForwardRefExoticComponent<ChartVerticalColumnsCircleCheckProps & RefAttributes<SVGSVGElement>>;

export default ChartVerticalColumnsCircleCheck;
export { ChartVerticalColumnsCircleCheck };
