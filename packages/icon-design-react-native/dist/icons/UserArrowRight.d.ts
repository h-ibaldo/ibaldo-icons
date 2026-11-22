import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserArrowRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserArrowRight: ForwardRefExoticComponent<UserArrowRightProps & RefAttributes<Svg>>;

export default UserArrowRight;
export { UserArrowRight };
