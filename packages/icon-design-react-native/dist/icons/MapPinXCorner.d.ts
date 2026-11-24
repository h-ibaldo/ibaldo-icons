import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MapPinXCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MapPinXCorner: ForwardRefExoticComponent<MapPinXCornerProps & RefAttributes<Svg>>;

export default MapPinXCorner;
export { MapPinXCorner };
