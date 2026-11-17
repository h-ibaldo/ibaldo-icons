import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineCircleArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineCircleArrowRight: ForwardRefExoticComponent<ChartLineCircleArrowRightProps & RefAttributes<SVGSVGElement>>;

export default ChartLineCircleArrowRight;
export { ChartLineCircleArrowRight };
