import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserWide: ForwardRefExoticComponent<UserWideProps & RefAttributes<Svg>>;

export default UserWide;
export { UserWide };
