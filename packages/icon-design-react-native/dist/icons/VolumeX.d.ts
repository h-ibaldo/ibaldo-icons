import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VolumeXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VolumeX: ForwardRefExoticComponent<VolumeXProps & RefAttributes<Svg>>;

export default VolumeX;
export { VolumeX };
