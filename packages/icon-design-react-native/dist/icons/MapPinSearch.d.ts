import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MapPinSearchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MapPinSearch: ForwardRefExoticComponent<MapPinSearchProps & RefAttributes<Svg>>;

export default MapPinSearch;
export { MapPinSearch };
