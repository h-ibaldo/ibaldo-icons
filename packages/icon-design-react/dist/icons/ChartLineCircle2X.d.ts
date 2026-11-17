import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineCircle2XProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineCircle2X: ForwardRefExoticComponent<ChartLineCircle2XProps & RefAttributes<SVGSVGElement>>;

export default ChartLineCircle2X;
export { ChartLineCircle2X };
