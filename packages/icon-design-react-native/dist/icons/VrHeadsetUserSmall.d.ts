import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VrHeadsetUserSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VrHeadsetUserSmall: ForwardRefExoticComponent<VrHeadsetUserSmallProps & RefAttributes<Svg>>;

export default VrHeadsetUserSmall;
export { VrHeadsetUserSmall };
