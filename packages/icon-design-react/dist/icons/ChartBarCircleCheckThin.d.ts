import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarCircleCheckThinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarCircleCheckThin: ForwardRefExoticComponent<ChartBarCircleCheckThinProps & RefAttributes<SVGSVGElement>>;

export default ChartBarCircleCheckThin;
export { ChartBarCircleCheckThin };
