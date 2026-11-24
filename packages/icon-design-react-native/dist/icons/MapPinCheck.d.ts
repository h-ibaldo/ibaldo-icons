import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MapPinCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MapPinCheck: ForwardRefExoticComponent<MapPinCheckProps & RefAttributes<Svg>>;

export default MapPinCheck;
export { MapPinCheck };
