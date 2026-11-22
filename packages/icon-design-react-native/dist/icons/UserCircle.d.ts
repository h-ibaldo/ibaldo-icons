import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserCircle: ForwardRefExoticComponent<UserCircleProps & RefAttributes<Svg>>;

export default UserCircle;
export { UserCircle };
