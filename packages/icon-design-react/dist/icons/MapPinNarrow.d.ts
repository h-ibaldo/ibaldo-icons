import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MapPinNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MapPinNarrow: ForwardRefExoticComponent<MapPinNarrowProps & RefAttributes<SVGSVGElement>>;

export default MapPinNarrow;
export { MapPinNarrow };
