import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineCircle: ForwardRefExoticComponent<ChartLineCircleProps & RefAttributes<SVGSVGElement>>;

export default ChartLineCircle;
export { ChartLineCircle };
