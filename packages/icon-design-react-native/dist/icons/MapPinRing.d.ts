import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MapPinRingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MapPinRing: ForwardRefExoticComponent<MapPinRingProps & RefAttributes<Svg>>;

export default MapPinRing;
export { MapPinRing };
