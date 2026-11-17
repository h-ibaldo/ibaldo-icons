import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBar: ForwardRefExoticComponent<ChartBarProps & RefAttributes<SVGSVGElement>>;

export default ChartBar;
export { ChartBar };
