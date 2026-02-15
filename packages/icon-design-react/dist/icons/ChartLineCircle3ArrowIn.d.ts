import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineCircle3ArrowInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineCircle3ArrowIn: ForwardRefExoticComponent<ChartLineCircle3ArrowInProps & RefAttributes<SVGSVGElement>>;

export default ChartLineCircle3ArrowIn;
export { ChartLineCircle3ArrowIn };
