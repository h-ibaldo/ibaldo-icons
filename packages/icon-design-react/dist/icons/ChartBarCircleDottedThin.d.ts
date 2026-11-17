import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarCircleDottedThinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarCircleDottedThin: ForwardRefExoticComponent<ChartBarCircleDottedThinProps & RefAttributes<SVGSVGElement>>;

export default ChartBarCircleDottedThin;
export { ChartBarCircleDottedThin };
