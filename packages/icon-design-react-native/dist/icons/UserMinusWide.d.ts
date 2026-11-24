import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserMinusWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserMinusWide: ForwardRefExoticComponent<UserMinusWideProps & RefAttributes<Svg>>;

export default UserMinusWide;
export { UserMinusWide };
