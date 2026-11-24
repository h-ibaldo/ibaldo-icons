import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VrHeadsetUserProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VrHeadsetUser: ForwardRefExoticComponent<VrHeadsetUserProps & RefAttributes<Svg>>;

export default VrHeadsetUser;
export { VrHeadsetUser };
