import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarCircleXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarCircleX: ForwardRefExoticComponent<ChartBarCircleXProps & RefAttributes<SVGSVGElement>>;

export default ChartBarCircleX;
export { ChartBarCircleX };
