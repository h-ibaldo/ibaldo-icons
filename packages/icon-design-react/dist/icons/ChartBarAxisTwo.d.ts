import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarAxisTwoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarAxisTwo: ForwardRefExoticComponent<ChartBarAxisTwoProps & RefAttributes<SVGSVGElement>>;

export default ChartBarAxisTwo;
export { ChartBarAxisTwo };
