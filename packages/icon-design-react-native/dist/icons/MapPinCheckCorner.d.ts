import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MapPinCheckCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MapPinCheckCorner: ForwardRefExoticComponent<MapPinCheckCornerProps & RefAttributes<Svg>>;

export default MapPinCheckCorner;
export { MapPinCheckCorner };
