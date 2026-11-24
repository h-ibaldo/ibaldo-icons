import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MapPinWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MapPinWide: ForwardRefExoticComponent<MapPinWideProps & RefAttributes<SVGSVGElement>>;

export default MapPinWide;
export { MapPinWide };
