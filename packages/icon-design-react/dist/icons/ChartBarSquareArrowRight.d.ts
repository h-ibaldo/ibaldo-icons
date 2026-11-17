import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarSquareArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarSquareArrowRight: ForwardRefExoticComponent<ChartBarSquareArrowRightProps & RefAttributes<SVGSVGElement>>;

export default ChartBarSquareArrowRight;
export { ChartBarSquareArrowRight };
