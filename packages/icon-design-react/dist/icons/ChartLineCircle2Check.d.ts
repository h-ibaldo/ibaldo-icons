import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineCircle2CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineCircle2Check: ForwardRefExoticComponent<ChartLineCircle2CheckProps & RefAttributes<SVGSVGElement>>;

export default ChartLineCircle2Check;
export { ChartLineCircle2Check };
