import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarCircleMinusThinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarCircleMinusThin: ForwardRefExoticComponent<ChartBarCircleMinusThinProps & RefAttributes<SVGSVGElement>>;

export default ChartBarCircleMinusThin;
export { ChartBarCircleMinusThin };
