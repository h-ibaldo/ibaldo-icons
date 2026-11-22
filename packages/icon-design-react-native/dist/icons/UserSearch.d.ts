import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserSearchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserSearch: ForwardRefExoticComponent<UserSearchProps & RefAttributes<Svg>>;

export default UserSearch;
export { UserSearch };
