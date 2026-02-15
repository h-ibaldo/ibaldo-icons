import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineCircle2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineCircle2: ForwardRefExoticComponent<ChartLineCircle2Props & RefAttributes<SVGSVGElement>>;

export default ChartLineCircle2;
export { ChartLineCircle2 };
