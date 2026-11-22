import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserArrowUpWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserArrowUpWide: ForwardRefExoticComponent<UserArrowUpWideProps & RefAttributes<Svg>>;

export default UserArrowUpWide;
export { UserArrowUpWide };
