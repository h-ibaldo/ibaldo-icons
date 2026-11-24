import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MapPinHouseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MapPinHouse: ForwardRefExoticComponent<MapPinHouseProps & RefAttributes<SVGSVGElement>>;

export default MapPinHouse;
export { MapPinHouse };
