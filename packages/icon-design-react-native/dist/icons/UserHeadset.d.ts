import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserHeadsetProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserHeadset: ForwardRefExoticComponent<UserHeadsetProps & RefAttributes<Svg>>;

export default UserHeadset;
export { UserHeadset };
