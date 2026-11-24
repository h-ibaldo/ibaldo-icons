import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserArrowLeftWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserArrowLeftWide: ForwardRefExoticComponent<UserArrowLeftWideProps & RefAttributes<Svg>>;

export default UserArrowLeftWide;
export { UserArrowLeftWide };
