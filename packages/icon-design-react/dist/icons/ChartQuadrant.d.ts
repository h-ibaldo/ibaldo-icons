import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartQuadrantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartQuadrant: ForwardRefExoticComponent<ChartQuadrantProps & RefAttributes<SVGSVGElement>>;

export default ChartQuadrant;
export { ChartQuadrant };
