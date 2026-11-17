import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarCircleXThinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarCircleXThin: ForwardRefExoticComponent<ChartBarCircleXThinProps & RefAttributes<SVGSVGElement>>;

export default ChartBarCircleXThin;
export { ChartBarCircleXThin };
