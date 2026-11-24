import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserGroupContourProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserGroupContour: ForwardRefExoticComponent<UserGroupContourProps & RefAttributes<Svg>>;

export default UserGroupContour;
export { UserGroupContour };
