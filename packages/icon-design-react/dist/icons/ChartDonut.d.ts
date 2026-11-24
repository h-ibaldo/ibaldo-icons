import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartDonutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartDonut: ForwardRefExoticComponent<ChartDonutProps & RefAttributes<SVGSVGElement>>;

export default ChartDonut;
export { ChartDonut };
