import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarArrowRightThinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarArrowRightThin: ForwardRefExoticComponent<ChartBarArrowRightThinProps & RefAttributes<SVGSVGElement>>;

export default ChartBarArrowRightThin;
export { ChartBarArrowRightThin };
