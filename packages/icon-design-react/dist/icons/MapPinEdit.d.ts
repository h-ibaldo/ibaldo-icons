import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MapPinEditProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MapPinEdit: ForwardRefExoticComponent<MapPinEditProps & RefAttributes<SVGSVGElement>>;

export default MapPinEdit;
export { MapPinEdit };
