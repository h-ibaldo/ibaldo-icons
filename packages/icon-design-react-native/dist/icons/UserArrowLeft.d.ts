import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserArrowLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserArrowLeft: ForwardRefExoticComponent<UserArrowLeftProps & RefAttributes<Svg>>;

export default UserArrowLeft;
export { UserArrowLeft };
