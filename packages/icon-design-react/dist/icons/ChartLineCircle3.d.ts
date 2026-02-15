import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineCircle3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineCircle3: ForwardRefExoticComponent<ChartLineCircle3Props & RefAttributes<SVGSVGElement>>;

export default ChartLineCircle3;
export { ChartLineCircle3 };
