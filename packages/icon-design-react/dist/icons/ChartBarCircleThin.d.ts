import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarCircleThinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarCircleThin: ForwardRefExoticComponent<ChartBarCircleThinProps & RefAttributes<SVGSVGElement>>;

export default ChartBarCircleThin;
export { ChartBarCircleThin };
