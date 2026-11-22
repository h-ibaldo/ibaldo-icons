import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserCheck: ForwardRefExoticComponent<UserCheckProps & RefAttributes<Svg>>;

export default UserCheck;
export { UserCheck };
