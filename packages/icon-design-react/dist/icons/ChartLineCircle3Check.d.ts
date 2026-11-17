import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineCircle3CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineCircle3Check: ForwardRefExoticComponent<ChartLineCircle3CheckProps & RefAttributes<SVGSVGElement>>;

export default ChartLineCircle3Check;
export { ChartLineCircle3Check };
