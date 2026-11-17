import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GraphHorizontalBarsRoundedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GraphHorizontalBarsRounded: ForwardRefExoticComponent<GraphHorizontalBarsRoundedProps & RefAttributes<SVGSVGElement>>;

export default GraphHorizontalBarsRounded;
export { GraphHorizontalBarsRounded };
