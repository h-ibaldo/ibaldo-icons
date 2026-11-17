import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineCircle3XProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineCircle3X: ForwardRefExoticComponent<ChartLineCircle3XProps & RefAttributes<SVGSVGElement>>;

export default ChartLineCircle3X;
export { ChartLineCircle3X };
