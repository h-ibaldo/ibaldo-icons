import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GraphHorizontalBarsTasksLinesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GraphHorizontalBarsTasksLines: ForwardRefExoticComponent<GraphHorizontalBarsTasksLinesProps & RefAttributes<SVGSVGElement>>;

export default GraphHorizontalBarsTasksLines;
export { GraphHorizontalBarsTasksLines };
