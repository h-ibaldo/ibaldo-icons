import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarMixedThinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarMixedThin: ForwardRefExoticComponent<ChartBarMixedThinProps & RefAttributes<SVGSVGElement>>;

export default ChartBarMixedThin;
export { ChartBarMixedThin };
