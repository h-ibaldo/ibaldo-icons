import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MapPinOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MapPinOff: ForwardRefExoticComponent<MapPinOffProps & RefAttributes<Svg>>;

export default MapPinOff;
export { MapPinOff };
