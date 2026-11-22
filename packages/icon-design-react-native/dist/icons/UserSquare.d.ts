import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserSquare: ForwardRefExoticComponent<UserSquareProps & RefAttributes<Svg>>;

export default UserSquare;
export { UserSquare };
