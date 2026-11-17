import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarArrowUpThinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarArrowUpThin: ForwardRefExoticComponent<ChartBarArrowUpThinProps & RefAttributes<SVGSVGElement>>;

export default ChartBarArrowUpThin;
export { ChartBarArrowUpThin };
