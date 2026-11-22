import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserDoubleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserDouble: ForwardRefExoticComponent<UserDoubleProps & RefAttributes<Svg>>;

export default UserDouble;
export { UserDouble };
