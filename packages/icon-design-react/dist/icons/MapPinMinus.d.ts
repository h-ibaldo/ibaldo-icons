import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MapPinMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MapPinMinus: ForwardRefExoticComponent<MapPinMinusProps & RefAttributes<SVGSVGElement>>;

export default MapPinMinus;
export { MapPinMinus };
