import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarThinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarThin: ForwardRefExoticComponent<ChartBarThinProps & RefAttributes<SVGSVGElement>>;

export default ChartBarThin;
export { ChartBarThin };
