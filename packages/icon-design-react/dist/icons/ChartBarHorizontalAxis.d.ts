import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarHorizontalAxisProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarHorizontalAxis: ForwardRefExoticComponent<ChartBarHorizontalAxisProps & RefAttributes<SVGSVGElement>>;

export default ChartBarHorizontalAxis;
export { ChartBarHorizontalAxis };
