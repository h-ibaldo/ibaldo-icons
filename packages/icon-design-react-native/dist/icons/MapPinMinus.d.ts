import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MapPinMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MapPinMinus: ForwardRefExoticComponent<MapPinMinusProps & RefAttributes<Svg>>;

export default MapPinMinus;
export { MapPinMinus };
