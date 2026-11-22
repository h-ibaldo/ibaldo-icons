import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MapPinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MapPin: ForwardRefExoticComponent<MapPinProps & RefAttributes<SVGSVGElement>>;

export default MapPin;
export { MapPin };
