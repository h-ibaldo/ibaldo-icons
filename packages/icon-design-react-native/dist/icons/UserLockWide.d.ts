import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserLockWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserLockWide: ForwardRefExoticComponent<UserLockWideProps & RefAttributes<Svg>>;

export default UserLockWide;
export { UserLockWide };
