import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserPlusWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserPlusWide: ForwardRefExoticComponent<UserPlusWideProps & RefAttributes<Svg>>;

export default UserPlusWide;
export { UserPlusWide };
