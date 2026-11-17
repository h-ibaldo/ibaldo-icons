import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineCircleDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineCircleDotted: ForwardRefExoticComponent<ChartLineCircleDottedProps & RefAttributes<SVGSVGElement>>;

export default ChartLineCircleDotted;
export { ChartLineCircleDotted };
