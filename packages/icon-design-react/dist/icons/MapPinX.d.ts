import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MapPinXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MapPinX: ForwardRefExoticComponent<MapPinXProps & RefAttributes<SVGSVGElement>>;

export default MapPinX;
export { MapPinX };
