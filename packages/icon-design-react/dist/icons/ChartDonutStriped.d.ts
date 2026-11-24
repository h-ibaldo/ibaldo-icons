import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartDonutStripedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartDonutStriped: ForwardRefExoticComponent<ChartDonutStripedProps & RefAttributes<SVGSVGElement>>;

export default ChartDonutStriped;
export { ChartDonutStriped };
