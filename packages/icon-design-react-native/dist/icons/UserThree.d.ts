import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserThreeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserThree: ForwardRefExoticComponent<UserThreeProps & RefAttributes<Svg>>;

export default UserThree;
export { UserThree };
