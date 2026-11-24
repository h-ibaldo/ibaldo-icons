import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MapPinOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MapPinOff: ForwardRefExoticComponent<MapPinOffProps & RefAttributes<SVGSVGElement>>;

export default MapPinOff;
export { MapPinOff };
