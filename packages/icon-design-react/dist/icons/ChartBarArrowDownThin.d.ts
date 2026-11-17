import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarArrowDownThinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarArrowDownThin: ForwardRefExoticComponent<ChartBarArrowDownThinProps & RefAttributes<SVGSVGElement>>;

export default ChartBarArrowDownThin;
export { ChartBarArrowDownThin };
