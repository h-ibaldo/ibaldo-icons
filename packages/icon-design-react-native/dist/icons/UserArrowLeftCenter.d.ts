import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserArrowLeftCenterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserArrowLeftCenter: ForwardRefExoticComponent<UserArrowLeftCenterProps & RefAttributes<Svg>>;

export default UserArrowLeftCenter;
export { UserArrowLeftCenter };
