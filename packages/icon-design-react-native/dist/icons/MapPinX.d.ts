import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MapPinXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MapPinX: ForwardRefExoticComponent<MapPinXProps & RefAttributes<Svg>>;

export default MapPinX;
export { MapPinX };
