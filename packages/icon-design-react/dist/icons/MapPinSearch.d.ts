import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MapPinSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MapPinSearch: ForwardRefExoticComponent<MapPinSearchProps & RefAttributes<SVGSVGElement>>;

export default MapPinSearch;
export { MapPinSearch };
