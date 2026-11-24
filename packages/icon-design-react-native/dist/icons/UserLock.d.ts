import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserLockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserLock: ForwardRefExoticComponent<UserLockProps & RefAttributes<Svg>>;

export default UserLock;
export { UserLock };
