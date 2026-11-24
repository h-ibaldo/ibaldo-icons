import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MapPinPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MapPinPlus: ForwardRefExoticComponent<MapPinPlusProps & RefAttributes<Svg>>;

export default MapPinPlus;
export { MapPinPlus };
