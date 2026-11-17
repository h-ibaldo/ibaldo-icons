import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarCircleArrowRightThinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarCircleArrowRightThin: ForwardRefExoticComponent<ChartBarCircleArrowRightThinProps & RefAttributes<SVGSVGElement>>;

export default ChartBarCircleArrowRightThin;
export { ChartBarCircleArrowRightThin };
