import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MapPinNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MapPinNarrow: ForwardRefExoticComponent<MapPinNarrowProps & RefAttributes<Svg>>;

export default MapPinNarrow;
export { MapPinNarrow };
