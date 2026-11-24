import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserHeadsetLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserHeadsetLong: ForwardRefExoticComponent<UserHeadsetLongProps & RefAttributes<Svg>>;

export default UserHeadsetLong;
export { UserHeadsetLong };
