import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserSearchWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserSearchWide: ForwardRefExoticComponent<UserSearchWideProps & RefAttributes<Svg>>;

export default UserSearchWide;
export { UserSearchWide };
