import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VolumeOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VolumeOff: ForwardRefExoticComponent<VolumeOffProps & RefAttributes<Svg>>;

export default VolumeOff;
export { VolumeOff };
