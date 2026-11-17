import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GraphHorizontalBarsLinesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GraphHorizontalBarsLines: ForwardRefExoticComponent<GraphHorizontalBarsLinesProps & RefAttributes<SVGSVGElement>>;

export default GraphHorizontalBarsLines;
export { GraphHorizontalBarsLines };
