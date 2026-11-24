import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MapPinMinusCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MapPinMinusCorner: ForwardRefExoticComponent<MapPinMinusCornerProps & RefAttributes<SVGSVGElement>>;

export default MapPinMinusCorner;
export { MapPinMinusCorner };
