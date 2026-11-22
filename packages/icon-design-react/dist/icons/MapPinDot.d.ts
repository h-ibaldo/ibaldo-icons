import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MapPinDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MapPinDot: ForwardRefExoticComponent<MapPinDotProps & RefAttributes<SVGSVGElement>>;

export default MapPinDot;
export { MapPinDot };
