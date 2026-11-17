import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GraphHorizontalBarsStripesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GraphHorizontalBarsStripes: ForwardRefExoticComponent<GraphHorizontalBarsStripesProps & RefAttributes<SVGSVGElement>>;

export default GraphHorizontalBarsStripes;
export { GraphHorizontalBarsStripes };
