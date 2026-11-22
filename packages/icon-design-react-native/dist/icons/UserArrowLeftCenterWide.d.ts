import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserArrowLeftCenterWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserArrowLeftCenterWide: ForwardRefExoticComponent<UserArrowLeftCenterWideProps & RefAttributes<Svg>>;

export default UserArrowLeftCenterWide;
export { UserArrowLeftCenterWide };
