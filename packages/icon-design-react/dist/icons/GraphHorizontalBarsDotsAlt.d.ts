import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GraphHorizontalBarsDotsAltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GraphHorizontalBarsDotsAlt: ForwardRefExoticComponent<GraphHorizontalBarsDotsAltProps & RefAttributes<SVGSVGElement>>;

export default GraphHorizontalBarsDotsAlt;
export { GraphHorizontalBarsDotsAlt };
