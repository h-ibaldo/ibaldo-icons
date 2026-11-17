import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineVolatileProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineVolatile: ForwardRefExoticComponent<ChartLineVolatileProps & RefAttributes<SVGSVGElement>>;

export default ChartLineVolatile;
export { ChartLineVolatile };
