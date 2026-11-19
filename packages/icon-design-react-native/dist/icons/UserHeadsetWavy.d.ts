import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserHeadsetWavyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserHeadsetWavy: ForwardRefExoticComponent<UserHeadsetWavyProps & RefAttributes<Svg>>;

export default UserHeadsetWavy;
export { UserHeadsetWavy };
