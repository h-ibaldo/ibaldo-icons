import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MapPinNeedleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MapPinNeedle: ForwardRefExoticComponent<MapPinNeedleProps & RefAttributes<Svg>>;

export default MapPinNeedle;
export { MapPinNeedle };
