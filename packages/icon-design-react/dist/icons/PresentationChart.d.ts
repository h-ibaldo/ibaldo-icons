import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PresentationChartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PresentationChart: ForwardRefExoticComponent<PresentationChartProps & RefAttributes<SVGSVGElement>>;

export default PresentationChart;
export { PresentationChart };
