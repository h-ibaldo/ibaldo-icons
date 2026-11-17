import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarCircleArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarCircleArrowRight: ForwardRefExoticComponent<ChartBarCircleArrowRightProps & RefAttributes<SVGSVGElement>>;

export default ChartBarCircleArrowRight;
export { ChartBarCircleArrowRight };
