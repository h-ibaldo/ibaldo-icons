import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserEditProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserEdit: ForwardRefExoticComponent<UserEditProps & RefAttributes<Svg>>;

export default UserEdit;
export { UserEdit };
