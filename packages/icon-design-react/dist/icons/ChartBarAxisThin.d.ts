import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarAxisThinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarAxisThin: ForwardRefExoticComponent<ChartBarAxisThinProps & RefAttributes<SVGSVGElement>>;

export default ChartBarAxisThin;
export { ChartBarAxisThin };
