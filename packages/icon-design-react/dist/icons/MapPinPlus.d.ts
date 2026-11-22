import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MapPinPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MapPinPlus: ForwardRefExoticComponent<MapPinPlusProps & RefAttributes<SVGSVGElement>>;

export default MapPinPlus;
export { MapPinPlus };
