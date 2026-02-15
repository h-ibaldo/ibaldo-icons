import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineCircle32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineCircle32: ForwardRefExoticComponent<ChartLineCircle32Props & RefAttributes<SVGSVGElement>>;

export default ChartLineCircle32;
export { ChartLineCircle32 };
