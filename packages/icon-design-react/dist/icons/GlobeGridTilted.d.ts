import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GlobeGridTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GlobeGridTilted: ForwardRefExoticComponent<GlobeGridTiltedProps & RefAttributes<SVGSVGElement>>;

export default GlobeGridTilted;
export { GlobeGridTilted };
