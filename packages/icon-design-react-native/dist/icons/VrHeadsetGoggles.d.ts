import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VrHeadsetGogglesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VrHeadsetGoggles: ForwardRefExoticComponent<VrHeadsetGogglesProps & RefAttributes<Svg>>;

export default VrHeadsetGoggles;
export { VrHeadsetGoggles };
