import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserCircleWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserCircleWide: ForwardRefExoticComponent<UserCircleWideProps & RefAttributes<Svg>>;

export default UserCircleWide;
export { UserCircleWide };
