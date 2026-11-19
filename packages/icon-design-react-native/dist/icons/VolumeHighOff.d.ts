import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VolumeHighOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VolumeHighOff: ForwardRefExoticComponent<VolumeHighOffProps & RefAttributes<Svg>>;

export default VolumeHighOff;
export { VolumeHighOff };
