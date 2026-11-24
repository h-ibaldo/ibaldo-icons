import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserArrowRightCenterWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserArrowRightCenterWide: ForwardRefExoticComponent<UserArrowRightCenterWideProps & RefAttributes<Svg>>;

export default UserArrowRightCenterWide;
export { UserArrowRightCenterWide };
