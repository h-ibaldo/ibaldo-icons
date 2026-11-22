import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MapPinXCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MapPinXCorner: ForwardRefExoticComponent<MapPinXCornerProps & RefAttributes<SVGSVGElement>>;

export default MapPinXCorner;
export { MapPinXCorner };
