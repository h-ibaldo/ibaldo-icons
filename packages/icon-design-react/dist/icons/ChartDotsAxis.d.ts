import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartDotsAxisProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartDotsAxis: ForwardRefExoticComponent<ChartDotsAxisProps & RefAttributes<SVGSVGElement>>;

export default ChartDotsAxis;
export { ChartDotsAxis };
