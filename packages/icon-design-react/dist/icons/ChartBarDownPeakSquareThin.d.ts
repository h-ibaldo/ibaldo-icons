import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarDownPeakSquareThinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarDownPeakSquareThin: ForwardRefExoticComponent<ChartBarDownPeakSquareThinProps & RefAttributes<SVGSVGElement>>;

export default ChartBarDownPeakSquareThin;
export { ChartBarDownPeakSquareThin };
