import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarHorizontalStackedAxisProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarHorizontalStackedAxis: ForwardRefExoticComponent<ChartBarHorizontalStackedAxisProps & RefAttributes<SVGSVGElement>>;

export default ChartBarHorizontalStackedAxis;
export { ChartBarHorizontalStackedAxis };
