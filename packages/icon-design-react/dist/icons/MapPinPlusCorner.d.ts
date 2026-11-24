import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MapPinPlusCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MapPinPlusCorner: ForwardRefExoticComponent<MapPinPlusCornerProps & RefAttributes<SVGSVGElement>>;

export default MapPinPlusCorner;
export { MapPinPlusCorner };
