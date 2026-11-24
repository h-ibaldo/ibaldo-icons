import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarCircle: ForwardRefExoticComponent<ChartBarCircleProps & RefAttributes<SVGSVGElement>>;

export default ChartBarCircle;
export { ChartBarCircle };
