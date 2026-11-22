import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MapPinRingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MapPinRing: ForwardRefExoticComponent<MapPinRingProps & RefAttributes<SVGSVGElement>>;

export default MapPinRing;
export { MapPinRing };
