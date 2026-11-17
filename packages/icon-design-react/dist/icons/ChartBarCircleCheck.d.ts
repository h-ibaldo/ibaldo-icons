import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarCircleCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarCircleCheck: ForwardRefExoticComponent<ChartBarCircleCheckProps & RefAttributes<SVGSVGElement>>;

export default ChartBarCircleCheck;
export { ChartBarCircleCheck };
