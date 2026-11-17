import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarSquareArrowRightThinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarSquareArrowRightThin: ForwardRefExoticComponent<ChartBarSquareArrowRightThinProps & RefAttributes<SVGSVGElement>>;

export default ChartBarSquareArrowRightThin;
export { ChartBarSquareArrowRightThin };
