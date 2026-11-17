import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineUpAxisProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineUpAxis: ForwardRefExoticComponent<ChartLineUpAxisProps & RefAttributes<SVGSVGElement>>;

export default ChartLineUpAxis;
export { ChartLineUpAxis };
