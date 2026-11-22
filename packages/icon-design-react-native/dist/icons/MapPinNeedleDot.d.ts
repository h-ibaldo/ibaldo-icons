import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MapPinNeedleDotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MapPinNeedleDot: ForwardRefExoticComponent<MapPinNeedleDotProps & RefAttributes<Svg>>;

export default MapPinNeedleDot;
export { MapPinNeedleDot };
