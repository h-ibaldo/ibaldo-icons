import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserHeadsetSweptProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserHeadsetSwept: ForwardRefExoticComponent<UserHeadsetSweptProps & RefAttributes<Svg>>;

export default UserHeadsetSwept;
export { UserHeadsetSwept };
