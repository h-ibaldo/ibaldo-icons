import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MapPinNeedleDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MapPinNeedleDot: ForwardRefExoticComponent<MapPinNeedleDotProps & RefAttributes<SVGSVGElement>>;

export default MapPinNeedleDot;
export { MapPinNeedleDot };
