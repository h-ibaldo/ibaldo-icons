import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MapPinPlusCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MapPinPlusCorner: ForwardRefExoticComponent<MapPinPlusCornerProps & RefAttributes<Svg>>;

export default MapPinPlusCorner;
export { MapPinPlusCorner };
