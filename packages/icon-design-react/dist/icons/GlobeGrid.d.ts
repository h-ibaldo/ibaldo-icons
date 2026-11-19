import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GlobeGridProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GlobeGrid: ForwardRefExoticComponent<GlobeGridProps & RefAttributes<SVGSVGElement>>;

export default GlobeGrid;
export { GlobeGrid };
