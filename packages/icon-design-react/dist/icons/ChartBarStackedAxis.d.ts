import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarStackedAxisProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarStackedAxis: ForwardRefExoticComponent<ChartBarStackedAxisProps & RefAttributes<SVGSVGElement>>;

export default ChartBarStackedAxis;
export { ChartBarStackedAxis };
