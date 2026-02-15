import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineCircle2ArrowInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineCircle2ArrowIn: ForwardRefExoticComponent<ChartLineCircle2ArrowInProps & RefAttributes<SVGSVGElement>>;

export default ChartLineCircle2ArrowIn;
export { ChartLineCircle2ArrowIn };
