import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserSquareWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserSquareWide: ForwardRefExoticComponent<UserSquareWideProps & RefAttributes<Svg>>;

export default UserSquareWide;
export { UserSquareWide };
