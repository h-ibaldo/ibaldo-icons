import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MapPinDotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MapPinDot: ForwardRefExoticComponent<MapPinDotProps & RefAttributes<Svg>>;

export default MapPinDot;
export { MapPinDot };
