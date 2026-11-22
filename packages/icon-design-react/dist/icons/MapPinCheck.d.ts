import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MapPinCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MapPinCheck: ForwardRefExoticComponent<MapPinCheckProps & RefAttributes<SVGSVGElement>>;

export default MapPinCheck;
export { MapPinCheck };
