import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartSplineAxisProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartSplineAxis: ForwardRefExoticComponent<ChartSplineAxisProps & RefAttributes<SVGSVGElement>>;

export default ChartSplineAxis;
export { ChartSplineAxis };
