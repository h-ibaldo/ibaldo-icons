import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MapPinBaseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MapPinBase: ForwardRefExoticComponent<MapPinBaseProps & RefAttributes<SVGSVGElement>>;

export default MapPinBase;
export { MapPinBase };
