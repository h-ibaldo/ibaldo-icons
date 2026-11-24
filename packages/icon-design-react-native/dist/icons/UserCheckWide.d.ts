import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserCheckWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserCheckWide: ForwardRefExoticComponent<UserCheckWideProps & RefAttributes<Svg>>;

export default UserCheckWide;
export { UserCheckWide };
