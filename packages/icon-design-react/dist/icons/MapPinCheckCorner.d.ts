import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MapPinCheckCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MapPinCheckCorner: ForwardRefExoticComponent<MapPinCheckCornerProps & RefAttributes<SVGSVGElement>>;

export default MapPinCheckCorner;
export { MapPinCheckCorner };
