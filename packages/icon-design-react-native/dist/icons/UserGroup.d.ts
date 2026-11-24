import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserGroupProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserGroup: ForwardRefExoticComponent<UserGroupProps & RefAttributes<Svg>>;

export default UserGroup;
export { UserGroup };
