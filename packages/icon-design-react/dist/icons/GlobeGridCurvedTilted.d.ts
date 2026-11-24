import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GlobeGridCurvedTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GlobeGridCurvedTilted: ForwardRefExoticComponent<GlobeGridCurvedTiltedProps & RefAttributes<SVGSVGElement>>;

export default GlobeGridCurvedTilted;
export { GlobeGridCurvedTilted };
