import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarArrowRight: ForwardRefExoticComponent<ChartBarArrowRightProps & RefAttributes<SVGSVGElement>>;

export default ChartBarArrowRight;
export { ChartBarArrowRight };
