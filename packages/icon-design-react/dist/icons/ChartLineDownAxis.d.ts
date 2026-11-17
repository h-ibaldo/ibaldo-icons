import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineDownAxisProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineDownAxis: ForwardRefExoticComponent<ChartLineDownAxisProps & RefAttributes<SVGSVGElement>>;

export default ChartLineDownAxis;
export { ChartLineDownAxis };
