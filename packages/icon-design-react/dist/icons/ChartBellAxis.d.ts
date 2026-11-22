import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBellAxisProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBellAxis: ForwardRefExoticComponent<ChartBellAxisProps & RefAttributes<SVGSVGElement>>;

export default ChartBellAxis;
export { ChartBellAxis };
