import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserStarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserStar: ForwardRefExoticComponent<UserStarProps & RefAttributes<Svg>>;

export default UserStar;
export { UserStar };
