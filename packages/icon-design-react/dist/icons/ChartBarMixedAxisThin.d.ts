import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarMixedAxisThinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarMixedAxisThin: ForwardRefExoticComponent<ChartBarMixedAxisThinProps & RefAttributes<SVGSVGElement>>;

export default ChartBarMixedAxisThin;
export { ChartBarMixedAxisThin };
