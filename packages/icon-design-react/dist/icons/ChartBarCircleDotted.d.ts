import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarCircleDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarCircleDotted: ForwardRefExoticComponent<ChartBarCircleDottedProps & RefAttributes<SVGSVGElement>>;

export default ChartBarCircleDotted;
export { ChartBarCircleDotted };
