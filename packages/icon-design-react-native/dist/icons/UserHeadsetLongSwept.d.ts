import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserHeadsetLongSweptProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserHeadsetLongSwept: ForwardRefExoticComponent<UserHeadsetLongSweptProps & RefAttributes<Svg>>;

export default UserHeadsetLongSwept;
export { UserHeadsetLongSwept };
